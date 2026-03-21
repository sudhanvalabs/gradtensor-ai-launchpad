import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { courses, getCourseBySlug } from "@/data/courses";

const preRegisterCourses = courses.filter((c) => c.status === "pre-register");

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  whatsapp: z.string().min(10, "Please enter a valid WhatsApp number"),
  course: z.string().min(1, "Please select a course"),
  background: z.string().min(1, "Please select your background"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface PreRegisterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultCourse?: string;
}

const PreRegisterDialog = ({
  open,
  onOpenChange,
  defaultCourse,
}: PreRegisterDialogProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      course: defaultCourse || "",
      background: "",
      notes: "",
    },
  });

  useEffect(() => {
    if (defaultCourse) {
      form.setValue("course", defaultCourse);
    }
  }, [defaultCourse, form]);

  const onSubmit = async (data: FormValues) => {
    const courseTitle = getCourseBySlug(data.course)?.title || data.course;

    setSubmitting(true);
    try {
      // Save to Google Sheet
      await fetch(siteConfig.googleSheetUrl, {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          whatsapp: data.whatsapp,
          course: courseTitle,
          background: data.background,
          notes: data.notes || "",
        }),
      });
      setSubmitted(true);
    } catch {
      // Sheet save failed silently - still show confirmation
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSubmitted(false);
      form.reset({
        name: "",
        email: "",
        whatsapp: "",
        course: defaultCourse || "",
        background: "",
        notes: "",
      });
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" />
            <DialogHeader>
              <DialogTitle className="text-center font-display text-2xl">
                We've got your details!
              </DialogTitle>
              <DialogDescription className="text-center text-base">
                Thanks for registering your interest. We'll reach out on
                WhatsApp with batch dates and next steps.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => onOpenChange(false)}
              variant="outline"
              className="mt-6 font-display font-semibold tracking-wider"
            >
              Close
            </Button>
          </div>
        ) : (
        <>
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            Register Your Interest
          </DialogTitle>
          <DialogDescription className="text-sm">
            Tell us you're interested and we'll reach out on WhatsApp
            with batch dates, timings, and any questions you have. No
            payment required.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WhatsApp Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {preRegisterCourses.map((c) => (
                        <SelectItem key={c.slug} value={c.slug}>
                          {c.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="background"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Background</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your background" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="fresh-graduate">
                        Fresh Graduate
                      </SelectItem>
                      <SelectItem value="working-professional">
                        Working Professional
                      </SelectItem>
                      <SelectItem value="career-switcher">
                        Career Switcher
                      </SelectItem>
                      <SelectItem value="teen">
                        Teen / Pre-college
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Notes{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Anything you'd like us to know"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full font-display font-semibold tracking-wider"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Register Interest"}
            </Button>
          </form>
        </Form>
        </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PreRegisterDialog;
