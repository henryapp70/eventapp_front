import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dcvxjhqk8",
  },
});

const losOtros = cld.image("event_images/otros2_ewwass");
const otros = cld.image("event_images/otros_fmwqif");
const seminario = cld.image("event_images/seminarios_mmabb9");
const literatura = cld.image("event_images/literatura_a8km2e");
const theater = cld.image("event_images/teatro_wsub7q");
const concert = cld.image("event_images/concerts_g1z6wn");
const sports = cld.image("event_images/deportes_y8ycgy");
const arts = cld.image("event_images/arts_ddy1yi");

export const imgOne = losOtros.resize(fill().width(1920).height(700));
export const imgTwo = otros.resize(fill().width(1920).height(700));
export const imgThree = seminario.resize(fill().width(1920).height(700));
export const imgFour = literatura.resize(fill().width(1920).height(700));
export const imgFive = theater.resize(fill().width(1920).height(700));
export const imgSix = concert.resize(fill().width(1920).height(700));
export const imgSeven = sports.resize(fill().width(1920).height(700));
export const imgEight = arts.resize(fill().width(1920).height(700));
