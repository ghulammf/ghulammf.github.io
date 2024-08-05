import vite from "../assets/vite.svg";
import react from '../assets/React.png';
import tailwind from '../assets/Tailwind.png';
import vue from '../assets/vue.svg';

// hemo design model
import homedesign1 from '../assets/home-design-1.jpg';
import homedesign2 from '../assets/home-design-2.jpg';

// resto model
import resto1 from '../assets/resto1.jpg';
import resto2 from '../assets/resto2.jpg';
import resto3 from '../assets/resto3.jpg';
import resto4 from '../assets/resto4.jpg';
import resto5 from '../assets/resto5.jpg';
import resto6 from '../assets/resto6.jpg';

// eza model
import eza1 from '../assets/eza1.jpg'
import eza2 from '../assets/eza2.jpg'
import eza3 from '../assets/eza3.jpg'
import eza4 from '../assets/eza4.jpg'
import eza5 from '../assets/eza5.jpg'
import eza6 from '../assets/eza6.jpg'

// car website
import carwebsite from '../assets/car-website.jpg'

const project = [
    {
        id: 1,
        title: "Home Design",
        projectType: "Self Project",
        prev: [
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
        typedemo: 'anchor',
        linkdemo: 'https://ghulammf.github.io/home-design/',
        imagedemo: []
    },
    {
        id: 2,
        title: "Restaurant App",
        projectType: "Self Project",
        prev: [
            resto1,
        ],
        technologies: [
            vue,
            vite,
        ],
        description: [
            "build a web application 'Restaurant App' using <b>Vuejs</b> framework",
            "The main feature of the application is <b>CRUD</b> restaurant menu",
            "implement an <b>authentication</b> system for admin users",
            "using <b>json-server</b> for RESTful API management",
            "using <b>Axios</b> to request data",
            "using <b>vue-router</b> to perform routing pages",
            "the application is built using the <b>MVC</b> concept"
        ],
        typedemo: 'modal',
        linkdemo: '',
        imagedemo: [
            resto1,
            resto2,
            resto3,
            resto4,
            resto5,
            resto6,
        ]
    },
    {
        id: 3,
        title: "Store Management",
        projectType: "Self Project",
        prev: [
            eza2,
        ],
        technologies: [
            react,
            tailwind,
            vite,

        ],
        description: [
            "build a Store Management Application web using the <b>Reactjs</b> library",
            "design the appearance of web pages using the <b>Tailwindcss</b> framework",
            "The main features of the application are store <b>CRUD</b> inventory, sales and employees",
            "using <b>react-router</b> for page routing",
            "using <b>axios</b> for data requests",
            "using <b>json-server</b> as RESTful-API"
        ],
        typedemo: 'modal',
        linkdemo: '',
        imagedemo: [
            eza1,
            eza2,
            eza3,
            eza4,
            eza5,
            eza6,
        ]
    },
    {
        id: 4,
        title: "Car Website",
        projectType: "Self Project",
        prev: [carwebsite],
        technologies: [
            vite,
            vue,
            tailwind,
        ],
        description: [
            "build a landing page 'Car Website' using <b>Vuejs</b> library",
            "using <b>tailwindcss</b> for interface styling",
            "Responsive website display on every screen size"
        ],
        typedemo: 'anchor',
        linkdemo: 'https://ghulammf.github.io/car-website/',
        imagedemo: []
    },
]

export default project