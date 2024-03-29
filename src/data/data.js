import { CgGym } from "react-icons/cg";
import { GiRunningShoe } from "react-icons/gi";


export const sideNavData =[
    {
        title: 'Dashboard', 
        icon: 'icon',
        link: '/home'
    }, 

    {
        title: 'Your Activity', 
        icon: 'icon',
        link: '/home/activity'
    }, 

    {
        title: 'Get Recipes', 
        icon: 'icon',
        link: '/home/meal-plan'
    }

]

export const heroCardData = [
    {
      heading: 'Hypertrophy training',
      description: 'Growth and strengthening',
      icon: CgGym,
      top: 150,
      right: 150,
    },

    {
      heading: 'Morning cardio',
      description: 'Aerobics to lose weight',
      icon: GiRunningShoe,
      top: 400,
      right: 90,
    },
    
  ];

export const mobileCard =[
    {
      icon: CgGym,
      heading: 'Personal Trainers',
      text: 'Get yourself a personal trainer at an affordable fee.'
    },
    {
      icon: CgGym,
      heading: 'Meal Plans',
      text: 'Get a custom meal plan that fits your fitness goals.'
    },
    {
      icon: CgGym,
      heading: 'Custom Plans',
      text: 'We have plans for shedding weight, building muscle, and maintenance.'
    },
    {
      icon: CgGym,
      heading: 'Free Consultation',
      text: `Don't be shy. Ask questions and get answers at $free.99`
    }
  ]