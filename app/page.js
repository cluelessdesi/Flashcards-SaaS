import Image from "next/image";
import { AppBar, Box, Button, Container, Toolbar, Typography, Grid } from "@mui/material";
import Head from "next/head";
import getStripe from "@/utils/getstripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <Container maxWidth='100vw'>

      <Head>
        <title>Flashcard Saas</title>
        <meta name = "description" content = "Create flashcard from your text"></meta>
      </Head>

      <AppBar position = "static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>Flashcard Saas</Typography>

          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>

          <SignedIn>
            <UserButton/>
          </SignedIn>

        </Toolbar>
      </AppBar>

      <Box sx={{textAlign: 'center', my: 4, }}>

        <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5">
          {' '}
          The easiest way to make flashcards from your text
        </Typography>

        <Button variant="contained" color="primary" sx={{mt: 2}}>Get Started</Button>

      </Box>

      <Box sx = {{my: 6, textAlign:'center'}}>
        <Typography variant="h4" components="h2">Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy text input</Typography>
            <Typography variant="h6">
              {' '}
              Simply input your text and let our software do the rest. Creating flashcards has never been easier
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy text input2</Typography>
            <Typography variant="h6">
              {' '}
              2Simply input your text and let our software do the rest. Creating flashcards has never been easier
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy text input3</Typography>
            <Typography variant="h6">
              {' '}
              3Simply input your text and let our software do the rest. Creating flashcards has never been easier
            </Typography>
          </Grid>

        </Grid>
      </Box>  

      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4">Pricing</Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2}}>
              <Typography variant="h5">Basic</Typography>
              <Typography variant="h6">$5 / month</Typography>
              <Typography variant="h6">
                {' '}
                Basic features, 2.5 GB storage, 200 flashcards
              </Typography>
              <Button variant="contained">Go Basic</Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2}}>
              <Typography variant="h5">Premium</Typography>
              <Typography variant="h6">$10 / month</Typography>
              <Typography variant="h6">
                {' '}
                AI features, 5 GB storage, 500 flashcards
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2}}>
              <Typography variant="h5">Platinum</Typography>
              <Typography variant="h6">$20 / month</Typography>
              <Typography variant="h6">
                {' '}
                AI features + smth weird idk, 10GB storage, 1000 flashcards
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Box>

    </Container>
  )
}
