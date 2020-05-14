import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NavBar from "../Navbar";
import "../Dashboard/style.css";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="rowC"
      >
        {/* HTML Card */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="html image"
              height="140"
              image="https://www.tutorialrepublic.com/lib/images/html-illustration.png"
              title="html image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                HTML
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                HTML is the standard markup language for Web pages.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              marginTop: 62,
            }}
          >
            <Button size="small" color="primary" href="/html-activites">
              Go To Activites
            </Button>
            <Button
              size="small"
              color="primary"
              href="https://www.w3schools.com/html/default.asp"
              target="_blank"
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
        {/* CSS Card */}
        <Card
          className={classes.root}
          style={{
            marginLeft: 35,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://www.tutorialrepublic.com/lib/images/css-illustration.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                CSS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                CSS is a language that describes the style of an HTML document.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              marginTop: 40,
            }}
          >
            <Button size="small" color="primary" href="/css-activites">
              Go To Activites
            </Button>
            <Button
              size="small"
              color="primary"
              href="https://www.w3schools.com/css/default.asp"
              target="_blank"
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
        {/* JS Card */}
        <Card
          className={classes.root}
          style={{
            marginLeft: 30,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Javascript
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                JavaScript is the programming language of HTML and the Web.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              marginTop: 40,
            }}
          >
            <Button size="small" color="primary" href="/js-activites">
              Go To Activites
            </Button>
            <Button
              size="small"
              color="primary"
              href="https://www.w3schools.com/js/default.asp"
              target="_blank"
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
