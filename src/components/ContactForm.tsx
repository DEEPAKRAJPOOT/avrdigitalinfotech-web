import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactQuery, parseLaravelValidationErrors } from "@/lib/query-api";

const serviceOptions = [
  "Web Development",
  "Mobile App Development",
  "AI Software Development",
  "Digital Marketing",
  "E-Commerce Development",
  "Backend Development",
  "Other",
] as const;

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  phone_number: z.string().min(5, "Phone number is required"),
  service: z.string().min(1, "Select a service"),
  description: z.string().min(10, "Please add a brief description (at least 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClassName =
  "bg-[#0c120e] border-white/5 focus-visible:border-primary/40 h-11 rounded-xl text-white transition-all text-sm placeholder:text-muted-foreground";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      service: "",
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: submitContactQuery,
    onSuccess: (data) => {
      toast.success(data.message || "Query submitted successfully.");
      reset();
    },
    onError: (error: unknown) => {
      const err = error as Error & { status?: number; body?: unknown };
      if (err.status === 422 && err.body) {
        const fieldErrors = parseLaravelValidationErrors(err.body);
        let applied = false;
        for (const [field, message] of Object.entries(fieldErrors)) {
          if (field in contactSchema.shape) {
            setError(field as keyof ContactFormValues, { message });
            applied = true;
          }
        }
        if (applied) {
          toast.error("Please fix the fields highlighted below.");
          return;
        }
      }
      toast.error(err.message || "Something went wrong. Please try again.");
    },
  });

  return (
    <section id="contact-form" className="w-full max-w-xl mx-auto text-center scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get in Touch</h2>
      <p className="text-muted-foreground text-xs md:text-sm mb-8 opacity-80 max-w-md mx-auto">
        Tell us about your project — we&apos;ll get back to you shortly.
      </p>

      <form
        onSubmit={handleSubmit((values) => mutation.mutate(values))}
        className="text-left space-y-5"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-muted-foreground text-xs">
              Name
            </Label>
            <Input id="contact-name" className={inputClassName} placeholder="Your name" {...register("name")} />
            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email" className="text-muted-foreground text-xs">
              Email
            </Label>
            <Input
              id="contact-email"
              type="email"
              className={inputClassName}
              placeholder="you@company.com"
              {...register("email")}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contact-phone" className="text-muted-foreground text-xs">
              Phone
            </Label>
            <Input
              id="contact-phone"
              type="tel"
              className={inputClassName}
              placeholder="+91 9205209548"
              {...register("phone_number")}
            />
            {errors.phone_number && <p className="text-xs text-destructive">{errors.phone_number.message}</p>}
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground text-xs">Service</Label>
            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className={`${inputClassName} h-11`}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0c120e] border-white/10 text-white">
                    {serviceOptions.map((opt) => (
                      <SelectItem key={opt} value={opt} className="focus:bg-primary/20 focus:text-white">
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-description" className="text-muted-foreground text-xs">
            Project details
          </Label>
          <Textarea
            id="contact-description"
            className={`${inputClassName} min-h-[120px] py-3 resize-y`}
            placeholder="What are you looking to build?"
            {...register("description")}
          />
          {errors.description && <p className="text-xs text-destructive">{errors.description.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={mutation.isPending}
          className="w-full sm:w-auto bg-primary text-background hover:bg-primary/90 h-11 px-8 rounded-xl font-bold text-sm shadow-lg shadow-primary/20"
        >
          {mutation.isPending ? "Sending…" : "Send message"}
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
