import { Card, CardContent, CardMedia, Link, Typography, } from "@mui/material"
import { formatDate } from "../helpers"

const NewCard = ({ item }) => {
  const { title, description, url, urlToImage, source, publishedAt } = item
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
    >

    <Card sx={{ maxWidth: 345, minHeight: 400 }}>
    <CardMedia
      sx={{ height: 200 }}
      image={urlToImage || "https://source.unsplash.com/random"}
      title={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" >
        {title}
      </Typography>
      <Typography gutterBottom variant="h6" component="p">
        {source.name}
      </Typography>
      <Typography gutterBottom variant="h6" component="p">
        {formatDate(publishedAt)}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ marginTop: 1 }}>
        {description || "No description"}
      </Typography>
    </CardContent>
  </Card>
  </Link>
  )
}

export default NewCard
