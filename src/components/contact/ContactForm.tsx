"use client";

import { useState } from "react";
import { AlertCircle, ChevronDown, Send } from "lucide-react";
import { SERVICES } from "@/data/services";

type FieldName = "name" | "email" | "phone" | "projectType" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

/** Focus order, so the first invalid field is the one we jump to. */
const ORDER: FieldName[] = ["name", "email", "phone", "projectType", "message"];

const PROJECT_TYPES = [...SERVICES.map((s) => s.label), "Something else"];

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "That email address does not look right.";
  }

  // Phone is optional, but validated when given.
  if (values.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Use digits, spaces, and + ( ) - only.";
  }

  if (!values.projectType) {
    errors.projectType = "Please choose a project type.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us about the project.";
  } else if (values.message.trim().length < 20) {
    errors.message = "A little more detail, please — 20 characters minimum.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [passed, setPassed] = useState(false);

  const update = (field: FieldName, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    // Only nag after the first submit — then keep the errors live.
    if (attempted) setErrors(validate(next));
    if (passed) setPassed(false);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    setAttempted(true);

    const firstInvalid = ORDER.find((field) => found[field]);
    if (firstInvalid) {
      setPassed(false);
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    // Nothing is wired to a backend yet — see the notice below the button.
    setPassed(true);
  };

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <TextField
        id="name"
        label="Name"
        value={values.name}
        error={errors.name}
        onValueChange={(v) => update("name", v)}
        autoComplete="name"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="email"
          label="Email"
          type="email"
          inputMode="email"
          value={values.email}
          error={errors.email}
          onValueChange={(v) => update("email", v)}
          autoComplete="email"
        />
        <TextField
          id="phone"
          label="Phone"
          optional
          type="tel"
          inputMode="tel"
          value={values.phone}
          error={errors.phone}
          onValueChange={(v) => update("phone", v)}
          autoComplete="tel"
        />
      </div>

      {/* Project type */}
      <div>
        <FieldLabel htmlFor="projectType">Project type</FieldLabel>
        <div className="relative">
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "projectType-error" : undefined
            }
            className={`w-full appearance-none border bg-concrete px-4 py-3.5 pr-11 text-base transition-colors focus:border-ink ${
              errors.projectType ? "border-danger" : "border-ink/20"
            } ${values.projectType ? "text-ink" : "text-grey"}`}
          >
            <option value="">Select a project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-grey"
            aria-hidden="true"
          />
        </div>
        <FieldError id="projectType-error" message={errors.projectType} />
      </div>

      {/* Message */}
      <div>
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Scope, location, and rough timeline."
          className={`w-full resize-y border bg-concrete px-4 py-3.5 text-base text-ink transition-colors placeholder:text-grey/70 focus:border-ink ${
            errors.message ? "border-danger" : "border-ink/20"
          }`}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-amber hover:text-ink sm:w-auto sm:py-3.5"
      >
        Send
        <Send
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </button>

      {/* Announced to screen readers the moment it appears */}
      <div aria-live="polite">
        {passed && (
          <p className="border border-ink/20 bg-concrete px-4 py-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-grey">
            Details validated. Sending is not connected yet.
          </p>
        )}
      </div>
    </form>
  );
}

function FieldLabel({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-grey"
    >
      {children}
      {optional && <span className="text-grey/60">(optional)</span>}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p
      id={id}
      role="alert"
      className="mt-2 flex items-start gap-1.5 text-sm text-danger"
    >
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

type TextFieldProps = {
  id: FieldName;
  label: string;
  value: string;
  error?: string;
  onValueChange: (value: string) => void;
  optional?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "value" | "onChange">;

function TextField({
  id,
  label,
  value,
  error,
  onValueChange,
  optional,
  type = "text",
  ...rest
}: TextFieldProps) {
  return (
    <div>
      <FieldLabel htmlFor={id} optional={optional}>
        {label}
      </FieldLabel>
      <input
        {...rest}
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full border bg-concrete px-4 py-3.5 text-base text-ink transition-colors placeholder:text-grey/70 focus:border-ink ${
          error ? "border-danger" : "border-ink/20"
        }`}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}
