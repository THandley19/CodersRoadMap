import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./style.css";
import API from "../../utils/API";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

class Dashboard extends Component {
  state = {
    name: "",
    description: "",
    units: [],
  };

  componentDidMount() {
    this.loadUnits();
  }

  loadUnits = () => {
    API.getUnits()
      .then((res) =>
        this.setState({ units: res.data, name: "", description: "" })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div
          style={{
            paddingBottom: "30px",
            position: "relative",
          }}
        >
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {this.state.units.map((unit) => (
              <Card
                className={useStyles.root}
                style={{
                  marginTop: 30,
                  marginLeft: 35,
                  width: 400,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={unit.name}
                    height="100"
                    image={unit.image}
                    title={unit.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {unit.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {unit.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={unit.activityLinks}
                  >
                    Activites
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href={unit.link}
                    target="_blank"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Dashboard;
