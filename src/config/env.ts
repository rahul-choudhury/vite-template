import * as z from "zod";

function createEnv() {
  const EnvSchema = z.object({
    API_URL: z.string(),
  });

  const envVars = Object.entries(import.meta.env).reduce<
    Record<string, string>
  >((acc, curr) => {
    const [key, value] = curr;
    if (key.startsWith("VITE_")) {
      acc[key.replace("VITE_", "")] = value;
    }
    return acc;
  }, {});

  const parsedEnv = EnvSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    const flattened = z.flattenError(parsedEnv.error);
    const errorMessages = [
      ...flattened.formErrors.map((err) => `- Form: ${err}`),
      ...Object.entries(flattened.fieldErrors).map(
        ([field, errors]) => `- ${field}: ${errors.join(", ")}`,
      ),
    ];

    throw new Error(
      `Invalid env provided.
The following variables are missing or invalid:
${errorMessages.join("\n")}
`,
    );
  }

  return parsedEnv.data;
}

export const env = createEnv();
