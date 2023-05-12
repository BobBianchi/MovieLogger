import IronManPoster from "../assets/img/IronMan2008.jpg";
import TheIncredibleHulkPoster from "../assets/img/TheIncredibleHulk2008.jpeg";
import IronMan2Poster from "../assets/img/IronMan22010.jpeg";
import ThorPoster from "../assets/img/Thor2011.jpeg";

export const MOVIES = [
    {
        id: 0,
        name: "Iron Man",
        image: IronManPoster,
        year: 2008,
        rating: 8,
        director: "Jon Favreau",
        featured: false,
        tagline: "HEROES AREN’T BORN. THEY’RE BUILT.",
        description:
            "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    },
    {
        id: 1,
        name: "The Incredible Hulk",
        image: TheIncredibleHulkPoster,
        year: 2008,
        rating: 4,
        director: "Louis Leterrier",
        featured: false,
        tagline: "YOU’LL LIKE HIM WHEN HE’S ANGRY.",
        description:
            "Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.",
    },
    {
        id: 2,
        name: "Iron Man 2",
        image: IronMan2Poster,
        year: 2010,
        rating: 7,
        director: "Jon Favreau",
        featured: false,
        tagline: "IT’S NOT THE ARMOR THAT MAKES THE HERO, BUT THE MAN INSIDE.",
        description:
            "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James ‘Rhodey’ Rhodes at his side, must forge new alliances – and confront powerful enemies.",
    },
    {
        id: 3,
        name: "Thor",
        image: ThorPoster,
        year: 2011,
        rating: 8,
        director: "Kenneth Branagh",
        featured: false,
        tagline: "TWO WORLDS. ONE HERO.",
        description:
            "Against his father Odin’s will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    },
];
