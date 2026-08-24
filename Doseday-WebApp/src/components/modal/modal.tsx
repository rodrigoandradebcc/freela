import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  IconButton,
  Fade,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import TextMaskCustom from "../phone-input";
import { KitCardData } from "@/@types/KitCardData";

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 450, md: 500 },
  maxWidth: 500,
  bgcolor: "#FFFFFF",
  borderRadius: 3,
  boxShadow: "0 20px 40px rgba(233, 30, 99, 0.15)",
  p: 0,
  outline: "none",
  border: "none",
  overflow: "hidden",
};

const headerStyle = {
  background: "linear-gradient(135deg, #E91E63 0%, #FF4081 100%)",
  p: 3,
  position: "relative",
  color: "#FFFFFF",
};

const contentStyle = {
  p: 3,
  backgroundColor: "#F4EDE3",
};

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
  selectedItem?: KitCardData;
}

// Função para validar email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para validar nome (mínimo 2 caracteres)
const isValidName = (name: string): boolean => {
  return name.trim().length >= 2;
};

// Função para validar telefone (deve ter pelo menos 10 dígitos)
const isValidPhone = (phone: string): boolean => {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 10;
};

export const SignupModal: React.FC<SignupModalProps> = ({
  open,
  onClose,
  selectedItem,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const clearForm = useCallback(() => {
    setName("");
    setEmail("");
    setPhone("");
    setIsSubmitting(false);
    setFieldErrors({});
  }, []);

  const handleClose = useCallback(() => {
    clearForm();
    onClose();
  }, [clearForm, onClose]);

  function onSuccess() {
    window.open(selectedItem?.checkoutLink, "_self");
  }

  const clearFieldError = (field: string) => {
    setFieldErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    // Validar nome
    if (!isValidName(name)) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
      isValid = false;
    }

    // Validar email
    if (!isValidEmail(email)) {
      newErrors.email = "Email com formato inválido";
      isValid = false;
    }

    // Validar telefone
    if (!isValidPhone(phone)) {
      newErrors.phone = "Telefone deve ter pelo menos 10 dígitos";
      isValid = false;
    }

    setFieldErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação client-side
    if (!validateForm()) {
      toast.error("❌ Por favor, corrija os erros nos campos destacados.", {
        autoClose: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
      };

      const response = await fetch(process.env.NEXT_PUBLIC_LEAD_URL as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success(
          "🎉 Cadastro realizado com sucesso! Você receberá seu desconto em breve."
        );
        onSuccess();
      } else {
        toast.error(
          "❌ Erro ao enviar os dados. Tente novamente em alguns instantes.",
          {
            autoClose: 4000,
          }
        );
      }
    } catch {
      toast.error(
        "❌ Erro de conexão. Verifique sua internet e tente novamente.",
        {
          autoClose: 4000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
          sx: { backgroundColor: "rgba(51, 51, 51, 0.7)" },
        },
      }}
    >
      <Fade in={open} timeout={300}>
        <Box sx={modalStyle}>
          {/* Header com botão de fechar */}
          <Box sx={headerStyle}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
                width: 32,
                height: 32,
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>

            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="center"
              sx={{ pr: 4 }}
            >
              🎁 Oferta Especial!
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              sx={{ mt: 1, opacity: 0.9 }}
            >
              Ganhe desconto em sua primeira compra
            </Typography>
          </Box>

          {/* Conteúdo do formulário */}
          <Box sx={contentStyle}>
            <Typography
              variant="body1"
              textAlign="center"
              mb={3}
              color="#333333"
              fontWeight={500}
            >
              Preencha seus dados e receba a oferta exclusiva!
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                placeholder="Seu nome completo"
                variant="outlined"
                margin="dense"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (fieldErrors.name) clearFieldError("name");
                }}
                required
                disabled={isSubmitting}
                error={!!fieldErrors.name}
                helperText={fieldErrors.name}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFFFFF",
                    borderRadius: 2,
                    "&:hover fieldset": {
                      borderColor: fieldErrors.name ? "#AD1457" : "#E91E63",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: fieldErrors.name ? "#AD1457" : "#FF4081",
                    },
                    "&.Mui-error fieldset": {
                      borderColor: "#AD1457",
                    },
                  },
                  "& .MuiFormHelperText-root.Mui-error": {
                    color: "#AD1457",
                    fontSize: "0.75rem",
                  },
                }}
              />

              <TextField
                fullWidth
                placeholder="Seu melhor email"
                variant="outlined"
                margin="dense"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email) clearFieldError("email");
                }}
                required
                disabled={isSubmitting}
                error={!!fieldErrors.email}
                helperText={fieldErrors.email}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFFFFF",
                    borderRadius: 2,
                    "&:hover fieldset": {
                      borderColor: fieldErrors.email ? "#AD1457" : "#E91E63",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: fieldErrors.email ? "#AD1457" : "#FF4081",
                    },
                    "&.Mui-error fieldset": {
                      borderColor: "#AD1457",
                    },
                  },
                  "& .MuiFormHelperText-root.Mui-error": {
                    color: "#AD1457",
                    fontSize: "0.75rem",
                  },
                }}
              />

              <TextField
                fullWidth
                placeholder="(00) 00000-0000"
                variant="outlined"
                margin="dense"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (fieldErrors.phone) clearFieldError("phone");
                }}
                required
                disabled={isSubmitting}
                error={!!fieldErrors.phone}
                helperText={fieldErrors.phone}
                slotProps={{
                  input: {
                    inputComponent: TextMaskCustom,
                  },
                }}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFFFFF",
                    borderRadius: 2,
                    "&:hover fieldset": {
                      borderColor: fieldErrors.phone ? "#AD1457" : "#E91E63",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: fieldErrors.phone ? "#AD1457" : "#FF4081",
                    },
                    "&.Mui-error fieldset": {
                      borderColor: "#AD1457",
                    },
                  },
                  "& .MuiFormHelperText-root.Mui-error": {
                    color: "#AD1457",
                    fontSize: "0.75rem",
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                sx={{
                  py: 1.5,
                  background:
                    "linear-gradient(135deg, #E91E63 0%, #FF4081 100%)",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  textTransform: "none",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #AD1457 0%, #C60055 100%)",
                    transform: "translateY(-1px)",
                  },
                  "&:disabled": {
                    background: "#666666",
                    color: "#FFFFFF",
                  },
                  borderRadius: 2,
                  boxShadow: "0px 6px 20px rgba(233, 30, 99, 0.4)",
                  transition: "all 0.3s ease",
                }}
              >
                {isSubmitting ? "Enviando..." : "🎯 QUERO MEU DESCONTO"}
              </Button>
            </form>

            <Typography
              variant="caption"
              display="block"
              textAlign="center"
              mt={2}
              color="#666666"
            >
              Seus dados estão seguros conosco 🔒
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
