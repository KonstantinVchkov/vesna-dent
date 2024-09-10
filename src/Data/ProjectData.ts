import { FaBeer, FaCoffee } from "react-icons/fa"; // Import icons
import {
  IconDefinition,
  faAward,
  faScrewdriverWrench,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const NavList = [
  { title: "Дома", path: "" },
  { title: "За нас", path: "about" },
  { title: "Услуги", path: "services" },
  { title: "Наша Работа", path: "ourwork" },
  // { title: "Стоматолози", path: "dentists" },
];
export const MainText = {
  id: 1,
  titles: [
    "Сигурно сакате да блескате од убавина кога ќе се насмевнете?",
    "Зошто чистењето на забен камен е убаво?",
    "Сигурно сте свесни колку е битно да ги четкате забите?",
  ],
  images: [
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  // secondTitle:
  //   "Дојдете  го искусите модерниот, трансформативен начин за добивање стоматолошка нега во Скопје.",
};
export const AboutUs = {
  title: "Прочитајте малку повеќе за нас",
  secondTitle: "Кои сме ние?",
  paragraph:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis numquam beatae autem quaerat explicabo sapiente sed repudiandae officiis fugiat, nostrum amet exercitationem facilis reiciendis provident eaque minus magnam vitae unde qui voluptatum veniam blanditiis! Magni quibusdam quia est ullam alias sapiente libero, iusto facere ut earum neque atque! Nostrum itaque, accusamus saepe quae dolor ullam odit, similique nulla illo fuga ipsa placeat! Fuga reiciendis in, hic, quae architecto ad, ab voluptatibus quia nobis recusandae enim vel vero libero voluptatem voluptate quidem fugit perferendis porro delectus cum quas dolorum modi. Unde doloremque ratione sit, cum ad nesciunt ipsa impedit aspernatur aliquam nobis! Sunt porro numquam saepe illum architecto hic nostrum odit minus, beatae officia quam veniam consequatur possimus recusandae vero esse ipsum? Consequatur repudiandae natus maiores nam fugiat saepe eius ea aliquam, excepturi accusamus aspernatur dignissimos quisquam voluptatibus beatae id nostrum ullam et quos molestias eligendi nesciunt libero. Ipsum temporibus animi, vitae eius, expedita nulla exercitationem magnam ipsa dolorum numquam, officiis assumenda ex placeat officia delectus aperiam rerum! Quo eos cupiditate tenetur hic earum? Tempora officiis adipisci distinctio consequuntur doloribus aspernatur reprehenderit autem quae explicabo? Quod eos repellendus, deleniti enim harum soluta esse maxime itaque quam saepe id quasi doloribus ad debitis dolor dolores, quaerat ipsa? Itaque vel ratione laboriosam debitis fuga consectetur doloremque repellendus? Quam temporibus sint tempora, corrupti assumenda libero quisquam hic aspernatur aperiam doloremque dolorem, fugit ut facilis dolorum tenetur et sunt iste labore id minima neque! Nulla expedita veniam nesciunt reprehenderit consectetur iste quo! Eaque, optio inventore blanditiis ea maiores, mollitia, eveniet et necessitatibus dolore illum at nisi sed laboriosam tenetur corrupti dolorem in reprehenderit veniam recusandae placeat illo voluptas esse non est. Asperiores cupiditate quia mollitia, aperiam temporibus, suscipit necessitatibus cum sapiente voluptatum ad ab? Maiores quas, rerum quisquam blanditiis excepturi dicta natus iure mollitia deserunt.",
  images: [
    "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1578689001884-55c21e109439?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  smallParagraph:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis numquam beatae autem quaerat explicabo sapiente sed repudiandae officiisLorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis numquam beatae autem quaerat explicabo sapiente sed repudiandae officiis",
  faqTitle: "Најчесто поставувани прашања?",
  QuestionsAndAnswers: [
    {
      id: 1,
      question: "Дали боли чистење на забен камен?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis numquam beatae autem quaerat explicabo sapiente sed repudiandae officiis fugiat, nostrum amet exercitationem facilis reiciendis provident eaque minus magnam ",
    },
    {
      id: 2,
      question: "Дали боли чистење на забен камен?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis numquam beatae autem quaerat explicabo sapiente sed repudiandae officiis fugiat, nostrum amet exercitationem facilis reiciendis provident eaque minus magnam ",
    },
    {
      id: 3,
      question: "Дали боли чистење на забен камен?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis numquam beatae autem quaerat explicabo sapiente sed repudiandae officiis fugiat, nostrum amet exercitationem facilis reiciendis provident eaque minus magnam ",
    },
    {
      id: 4,
      question: "Дали боли чистење на забен камен?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis numquam beatae autem quaerat explicabo sapiente sed repudiandae officiis fugiat, nostrum amet exercitationem facilis reiciendis provident eaque minus magnam ",
    },
  ],
};

export const Services = {
  serviceOne: "Lorem ipsum dolor sit amet consectetur.1",
  serviceTwo: "Lorem ipsum dolor sit amet consectetur.2",
  serviceThree: "Lorem ipsum dolor sit amet consectetur.3",
};
export const OurWork = {
  id: 1,
  slides: [
    {
      title: "Сигурно сакате да блескате од убавина кога ќе се насмевнете?",
      image:
        "https://images.unsplash.com/photo-1642953702322-a5da05d2e36b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia nulla, tempore odit natus maxime.",
      technics: ["Orthodontics"],
    },
    {
      title: "Зошто чистењето на забен камен е убаво?",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia nulla, tempore odit natus maxime.",
      technics: ["Cleaning"],
    },
    {
      title: "Сигурно сте свесни колку е битно да ги четкате забите?",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia nulla, tempore odit natus maxime.",
      technics: ["Brushing"],
    },
  ],

  workTechnic: "Употребени Техники",
  description: "Објаснување",
};

export const ServicesOffer = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Prosthodontics Dental Implants",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia nulla, tempore odit natus maxime.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Oral & Maxillofacial Surgery",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia nulla, tempore odit natus maxime.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Orthodontics and The Braces",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia nulla, tempore odit natus maxime.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Orthodontics and The Braces",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia nulla, tempore odit natus maxime.",
  },
];

export const ourDentists = [
  {
    id: 1,
    images: [
      "/assets/images/dentists-images/Vesna.png",
      "https://scontent.fskp4-1.fna.fbcdn.net/v/t39.30808-6/308621655_10227865027840276_5635266821960143379_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=4IcB8szBVFwAX-DR5kt&_nc_ht=scontent.fskp4-1.fna&oh=00_AfDlWmyK0WoAd4bDv0bvHgI3jWtC3w0cNG1-D-2UsFYmVw&oe=65C5143D",
      "https://scontent.fskp4-1.fna.fbcdn.net/v/t39.30808-6/308621655_10227865027840276_5635266821960143379_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=4IcB8szBVFwAX-DR5kt&_nc_ht=scontent.fskp4-1.fna&oh=00_AfDlWmyK0WoAd4bDv0bvHgI3jWtC3w0cNG1-D-2UsFYmVw&oe=65C5143D",
    ],
    name: "Весна",
    surname: "Миленковска",
    facebook: "https://www.facebook.com/vesna.k.milenkovska",
    bio: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque doloribus iusto et quia, commodi harum modi, optio voluptates libero, sint reiciendis exercitationem illo autem quo iste dolorum ab porro impedit incidunt natus explicabo architecto. ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque doloribus iusto et quia, commodi harum modi, optio voluptates libero, sint reiciendis exercitationem illo autem quo iste dolorum ab porro impedit incidunt natus explicabo architecto.",
  },
  {
    id: 2,
    images: [
      "/assets/images/dentists-images/Dragan.png",
      "https://media.licdn.com/dms/image/D5603AQEh5d8JL1T-5Q/profile-displayphoto-shrink_800_800/0/1706027522121?e=1712793600&v=beta&t=nl3xDhw0qjfv8Wp1kuYg9HL4R0bTLInP9xA-wMNw4ZM",
      "https://media.licdn.com/dms/image/D5603AQEh5d8JL1T-5Q/profile-displayphoto-shrink_800_800/0/1706027522121?e=1712793600&v=beta&t=nl3xDhw0qjfv8Wp1kuYg9HL4R0bTLInP9xA-wMNw4ZM",
    ],
    name: "Драган",
    surname: "Миленковски",
    facebook: "https://www.facebook.com/dragan.milenkovski.5",
    instagram: "https://www.instagram.com/milenkovskidragan/",
    linkedin: "https://www.linkedin.com/in/dragan-milenkovski-273a142ab/",
    bio: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque doloribus iusto et quia, commodi harum modi, optio voluptates libero, sint reiciendis exercitationem illo autem quo iste dolorum ab porro impedit incidunt natus explicabo architecto. ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque doloribus iusto et quia, commodi harum modi, optio voluptates libero, sint reiciendis exercitationem illo autem quo iste dolorum ab porro impedit incidunt natus explicabo architecto.",
  },
  {
    id: 3,
    images: [
      "/assets/images/dentists-images/Bojana.png",
      "https://scontent.fskp4-1.fna.fbcdn.net/v/t39.30808-6/417703491_7466883313342846_6132351921273586238_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Tic4kn9-F0kAX9IoxWF&_nc_ht=scontent.fskp4-1.fna&oh=00_AfCSkwJzYR6KMmkYADngIoGEhkrBc80NLSO7d3w4uGdfbg&oe=65C4AD53",
      "https://scontent.fskp4-1.fna.fbcdn.net/v/t39.30808-6/417703491_7466883313342846_6132351921273586238_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Tic4kn9-F0kAX9IoxWF&_nc_ht=scontent.fskp4-1.fna&oh=00_AfCSkwJzYR6KMmkYADngIoGEhkrBc80NLSO7d3w4uGdfbg&oe=65C4AD53",
    ],
    name: "Бојана",
    surname: "Миленковска",
    facebook: "https://www.facebook.com/bojana.milenkovska",
    instagram: "https://www.instagram.com/_bojanam13/",
    bio: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque doloribus iusto et quia, commodi harum modi, optio voluptates libero, sint reiciendis exercitationem illo autem quo iste dolorum ab porro impedit incidunt natus explicabo architecto. ",
  },
];

export const ourClients = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Софија Брзикова",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque doloribus iusto et quia, commodi harum modi, optio voluptates libero, sint reiciendis exercitationem illo autem quo iste dolorum ab porro impedit incidunt natus explicabo architecto.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Васил Шуткарев",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque doloribus iusto et quia, commodi harum modi, optio voluptates libero, sint reiciendis exercitationem illo autem quo iste dolorum ab porro impedit incidunt natus explicabo architecto.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Адријан Лубеков",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque doloribus iusto et quia, commodi harum modi, optio voluptates libero, sint reiciendis exercitationem illo autem quo iste dolorum ab porro impedit incidunt natus explicabo architecto.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Елена Зузелова",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque doloribus iusto et quia, commodi harum modi, optio voluptates libero, sint reiciendis exercitationem illo autem quo iste dolorum ab porro impedit incidunt natus explicabo architecto.",
  },
];
export const Work = [
  {
    id: 1,
    title: "Learn More About Our Work",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Teeth Whitening",
    paragraph:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Crowns",
    paragraph:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Fillings",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Partial Dentures",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const ourMilestones = [
  {
    id: 1,
    title: "Задоволни клиенти",
    stones: 2500,
    icon: faUsers,
  },
  { id: 2, title: "Награди", stones: 5, icon: faAward },
  {
    id: 3,
    title: "Извршени интервенции",
    stones: 3000,
    icon: faScrewdriverWrench,
  },
];
export const infoVesnaDent = [
  {
    id: 1,
    titles: "Vesna Dent",
    description: "Lorem ipsum",
    Phone: "000/000-000",
    WorkHours:
      "Mon - Thur - 8 AM to 4 PM Friday: 8am - 2pm (by appointment only) Saturday & Sundays: Closed",
  },
];
export const Offers = [
  {
    id: 1,
    icon: "/assets/icons/img-1.png",
    title: "БЕЛЕЕЊЕ НА ЗАБИТЕ",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    paragraphs: [
      {
        id: 1,
        title: "БЕЛЕЕЊЕ НА ЗАБИТЕ",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 2,
        title: "Што  претставува белеењето на забите?",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        title: "Дали сите заби се подложни на избелување?",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 4,
        title: "Дали белењето на забите е штетно?",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 5,
        title: "Колку долго траат резултатите од избелувањето на забите?",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 6,
        title: "Innovations in Dental Care",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 7,
        title: "Future of Oral Health",
        text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 2,
    icon: "/assets/icons/image-2.png",
    title: "МОСТОВИ И КОРОНКИ",
    paragraph:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    paragraphs: [
      {
        id: 8,
        title: "МОСТОВИ И КОРОНКИ",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 9,
        title: "Што е мост?",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 10,
        title: "Што се коронки?",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 11,
        title: "Кога се изработуваат мостови и коронки?",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 12,
        title: "Какви видови има?",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 13,
        title: "Колку време е потребно да се изработат?",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 14,
        title: "Колку долго ќе траат?",
        text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 3,
    icon: "/assets/icons/image-4.png",
    title: "ВИНИРИ",
    paragraph:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    paragraphs: [
      {
        id: 15,
        title: "ВИНИРИ",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 16,
        title: "Што се винири?",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 17,
        title: "Колку долго траат винирите?",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 18,
        title: "Какви видови винири постојат?",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 19,
        title: "Дали винирите ги оштетуваат забите?",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 20,
        title: "Која е разликата помеѓу винири, коронки и импланти?",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 21,
        title: "Кои се бенефитите од винири?",
        text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 4,
    icon: "/assets/icons/image-5.png",
    title: "ТОТАЛНИ И ПАРЦИЈАЛНИ ПРОТЕЗИ",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    paragraphs: [
      {
        id: 22,
        title: "ТОТАЛНИ И ПАРЦИЈАЛНИ ПРОТЕЗИ",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 23,
        title: "Што се тотални протези?",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 24,
        title: "Што се парцијални протези?",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 25,
        title: "Како се изработуваат протезите?",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 26,
        title: "Кои се бенефитите од протези?",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 27,
        title: "Preventive Skin Care",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 28,
        title: "Future of Dermatology",
        text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 5,
    icon: "/assets/icons/image-7.png",
    title: "МАШИНСКА ЕНДОДОНЦИЈА",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    paragraphs: [
      {
        id: 29,
        title: "МАШИНСКА ЕНДОДОНЦИЈА ",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 30,
        title: "Што е машинска ендодонција?",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 31,
        title: "Како ќе знам дали забот е соодветно излечен?",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 32,
        title:
          "Лекување на забот со машинска еднодонција или вадењето на тој заб?",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 33,
        title: "Како најдобро да се заштити ендодонтски третиран заб понатаму?",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 34,
        title: "Pediatric Emergency Care",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 35,
        title: "Future Trends in Pediatrics",
        text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
];
