import TextField from "@mui/material/TextField";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  type?: string;
  placeholder?: string;
  errorText?: string;
};

export default function FormTextField({
  label, name, value, onChange, type = "text", placeholder, errorText,
}: Props) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      size="medium"
      label={label}
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      type={type}
      placeholder={placeholder}
      error={Boolean(errorText)}
      helperText={errorText || " "}
    />
  );
}
