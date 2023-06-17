import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Alert, Container, Typography, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
import { useMetaMask } from '../hooks/useMetaMask';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');
  const { wallet, hasProvider, isConnecting, connectMetaMask, errorMessage } = useMetaMask();
  return (
    <>
      {wallet.accounts.length > 0 && <Navigate to="/" replace />}
      <Helmet>
        <title> Login | Chino </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              {errorMessage ?? <Alert severity="error">{errorMessage}</Alert>}
              {!hasProvider && (
                <Alert severity="error">
                  <a href="https://metamask.io" target="_blank" rel="noreferrer">
                    Install MetaMask
                  </a>
                </Alert>
              )}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Sign in to Chino
            </Typography>

            <Stack direction="row" spacing={2}>
              {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
                <Button
                  fullWidth
                  size="large"
                  color="inherit"
                  variant="outlined"
                  disabled={isConnecting}
                  onClick={connectMetaMask}
                >
                  <Iconify icon="logos:metamask-icon" color="#1C9CEA" width={22} height={22} />
                </Button>
              )}
            </Stack>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
