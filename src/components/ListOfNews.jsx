import { Box, Grid, Pagination, Stack, Typography } from '@mui/material';
import useNews from '../hooks/useNews';
import NewCard from './NewCard';
import { pagination } from '../helpers';

const ListOfNews = () => {
  const { news, page, totalNews, handleChangePage, pageSize } = useNews()

  return (
    <Box sx={{ mt: 6 }} >
      <Typography
        variant="h3"
        component="h2"
        textAlign="center"
        marginBottom="2rem"
        fontWeight="500"
      >
        Latest News
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="between"
        alignItems="center"
      >
        {news?.map((item) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={item.url}>
            <NewCard item={item} />
          </Grid>
        ))}
      </Grid>

      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          mt: 8,
          mb: 2,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Pagination
          count={pagination(totalNews, pageSize)}
          color="primary"
          size="large"
          onChange={handleChangePage}
          page={page}
        />
      </Stack>
    </Box>
  )
}

export default ListOfNews
