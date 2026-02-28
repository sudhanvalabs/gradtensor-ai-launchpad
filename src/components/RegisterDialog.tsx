import { useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappCustomLink } from "@/data/siteConfig";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  age: z.string().min(1, "Please enter your age"),
  grade: z.string().min(1, "Please enter your grade/class"),
  school: z.string().min(2, "Please enter your school name"),
  batch: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface RegisterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseTitle: string;
  defaultBatch?: string;
}

const RegisterDialog = ({
  open,
  onOpenChange,
  courseTitle,
  defaultBatch = "",
}: RegisterDialogProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      age: "",
      grade: "",
      school: "",
      batch: defaultBatch,
      notes: "",
    },
  });

  useEffect(() => {
    if (defaultBatch) {
      form.setValue("batch", defaultBatch);
    }
  }, [defaultBatch, form]);

  const onSubmit = async (data: FormValues) => {
    // Save to Google Sheet + email notification
    try {
      await fetch(siteConfig.googleSheetUrl, {
        method: "POST",
        body: JSON.stringify({
          type: "registration",
          course: courseTitle,
          name: data.name,
          email: data.email,
          age: data.age,
          grade: data.grade,
          school: data.school,
          batch: data.batch || "",
          notes: data.notes || "",
        }),
      });
    } catch {
      // Sheet save failed silently — still proceed to WhatsApp
    }

    // Open WhatsApp with pre-filled message
    const message = [
      `Hi, I'd like to register for ${courseTitle}`,
      ``,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Age: ${data.age}`,
      `Grade/Class: ${data.grade}`,
      `School: ${data.school}`,
      data.batch ? `Preferred Batch: ${data.batch}` : "",
      data.notes ? `Would love to build: ${data.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = whatsappCustomLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      form.reset();
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            Register for {courseTitle}
          </DialogTitle>
          <DialogDescription className="text-sm">
            Fill in your details and you'll be connected to us on WhatsApp to
            complete your registration.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 15" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade / Class</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 10th" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="school"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School</FormLabel>
                  <FormControl>
                    <Input placeholder="Your school name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="batch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Preferred batch{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Batch 1 - April 1"
                      {...field}
                    />
                  </FormControl>
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
                    What would you love to build with AI?{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. A chatbot, a game, an app for my school..."
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
            >
              Continue to WhatsApp
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
