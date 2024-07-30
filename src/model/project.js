import vite from "../assets/vite.svg";
import react from '../assets/React.png';
import tailwind from '../assets/Tailwind.png';
import vue from '../assets/vue.svg';
import homedesign1 from '../assets/home-design-1.jpg';
import homedesign2 from '../assets/home-design-2.jpg';
import resto1 from '../assets/resto1.jpg';
import resto2 from '../assets/resto2.jpg';
import resto3 from '../assets/resto3.jpg';
import resto4 from '../assets/resto4.jpg';
import resto5 from '../assets/resto5.jpg';
import resto6 from '../assets/resto6.jpg';


const project = [
    {
        id: 1,
        title: "Home Design",
        prev: [
            homedesign1,
            homedesign2,
        ],
        technologies: [
            vite,
            react,
            tailwind,
        ],
        description: [
            "build a landing page 'Home Design' using <b>React js</b> library",
            "using <b>tailwindcss</b> for interface styling",
            "Responsive website display on every screen size",
            "implementing components, layouting, state, props and mvc models on websites"
        ],
        demo: 'https://ghulammf.github.io/home-design/',
        imagedemo: []
    },
    {
        id: 2,
        title: "Restaurant App",
        prev: [
            resto1,
        ],
        technologies: [
            vue,
            vite,
        ],
        description: [
            "build a web application 'Restaurant App' using <b>vuejs</b> framework",
            "The main feature of the application is <b>CRUD</b> restaurant menu",
            "implement an <b>authentication</b> system for admin users",
            "using <b>json-server</b> for RESTful API management",
            "using <b>Axios</b> to request data",
            "using <b>vue-router</b> to perform routing pages",
            "the application is built using the <b>MVC</b> concept"
        ],
        demo: '',
        imagedemo: [
            resto1,
            resto2,
            resto3,
            resto4,
            resto5,
            resto6,
        ]
    }
]

export default project