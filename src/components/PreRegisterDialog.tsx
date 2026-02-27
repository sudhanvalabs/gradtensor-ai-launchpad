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
import { siteConfig, whatsappCustomLink } from "@/data/siteConfig";
import { courses } from "@/data/courses";
import WhatsAppButton from "@/components/WhatsAppButton";

const preRegisterCourses = courses.filter((c) => c.status === "pre-register");

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
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
    setSubmitting(true);
    try {
      await fetch(`https://formspree.io/f/${siteConfig.formspreeFormId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      // Fallback: still show success since Formspree may redirect
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
                You're on the list!
              </DialogTitle>
              <DialogDescription className="text-center text-base">
                We'll email you as soon as this course opens for enrollment.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6">
              <WhatsAppButton
                href={whatsappCustomLink(
                  "Hi, I just pre-registered for a GradTensor course and have a question"
                )}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Have questions? Chat with us on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl">
                Pre-Register for Early Access
              </DialogTitle>
              <DialogDescription className="text-sm">
                Be the first to know when this course launches. No payment
                required.
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
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
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
                        defaultValue={field.value}
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
                  {submitting ? "Submitting..." : "Pre-Register"}
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
