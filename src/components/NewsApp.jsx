import { Container, Grid } from "@mui/material"
import Header from "./Header"
import Form from "./Form"
import ListOfNews from "./ListOfNews"
import Footer from "./Footer"
import useNews from "../hooks/useNews"
import Loading from "./Loading"

const NewsApp = () => {
  const { news, loading } = useNews()
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>

      <Header />

      <main>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={8} md={6} lg={4.5}>
            <Form />
          </Grid>
        </Grid>

        {loading && <Loading />}

        {news?.length > 0 && <ListOfNews />}
        
      </main>

      <Footer />

    </Container>
  )
}

export default NewsApp
