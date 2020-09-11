// import React, { Component } from 'react';

// import "./Style.scss";

// import pastry from "../../assets/pastry.jpg";
// import logo from '../../assets/img/brand/logo2.png'
// //import mobiscroll from "mobiscroll";

// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from "@material-ui/icons/StarBorder";


// import Menu from "./Menu";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     flexWrap: 'nowrap',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
// }));



// class Cardimg extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//           tile:{
//             img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMVFRUXFxcXFRgXGBgXFxUXFRUWFhUXFRUYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy8mICUtLS0tLS0wLS0vLS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAD8QAAEDAgQDBgMGAwgCAwAAAAEAAhEDIQQSMUEFUWEGEyJxgZEyodEUQlKxwfCS4fEHFSMzU2JyghaiQ1TS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQMAAgQFBv/EAC0RAAICAQMEAQEHBQAAAAAAAAABAgMREiExBBNBUSJhBRQycYGh8SORwdHw/9oADAMBAAIRAxEAPwDcw0JO9Ctt4fzUreHhJVaRodjYP74JRVCJDABc7AtCOgGsoBwT+6aVa+yDkpqVADYKrgvQdbBzsFyUX2Gps0laBtUDb5JwxnJpPoluiLLq+SAtPhFU7QrNPgLzqUYGKdswp4qvP3PmrKiCKu6bBlPgA3Kt0uD0xsrJNTkAmOZUO4CYoRXCFuyT5ZVxdKkwaALMYqqC62i0tbhGc+J0pG9n6aVZXKXCHV2QhyzKOSgI/wAS4PSY0uBj1QFoWWcHDZmqE1NZRxCbClhNISxhGulT06JOgUbmwYIR3wTYRISlKjcgHA6UxzkwJUSHZk4OTYSqEwcXppeuK4tUDg7OuXQuUIbdzAommVXpYvmVbY8LqZOTjBza7W6phcHFNNAE3VqhQhRAYxtLoml3ROxWJAtuqzaihEi21pKlZTVQVeqa+t1UIEWjqldVjcISKea8lB8afFAJS7J6FkvCvW8Gjr8RLdgfVUanaEj7k+qBuUSQ+ofg0Lpo+Q+3tEfwAeqiq9oHnSAg+VJkVHfN+S6oh6JsTin1PicT+SgCcmms1l3Je8mOjHxFFnDUsxhTVqYEiLKliuP06bZEIdQ7WNquDAJlPjGCW4VRdL5KOwuK7UtouyWlWMPjxWGYCFB9kw1R5dVYLc0S+14fLDIGwhBxk48jrHTpWiD1eWV3BNhW+5MSonBZhSZAQkhSOXZlMhIYToTyV0IZCNDE1wUgK4tURCFcpMq5EhrKFFpUjqYBshtHDVB95Wm4Z27l1MHJLmdouSqmI4qPhbcpTgwdSSlZg2jQKYYMoptBN1K0FXBSCdlRwDJS7sp1PD807F4+lTEucAhrOKGu0mmcrLgO5+QQbRZRbLmOxgYMrdUKczc7qHEUCxl35i7cqanQsADJWW3M5YSHVPSyMhJlUv2N/JcMDU6JPal6NXcj7Iio3PVwcPfzSt4S47o9mfoCth7BtWrAJVKtUbUjxX2HNabE8Kb3ZaLkodguBU6H+IRmdFunkrKqSY2u+vS93nwAsZw1xEOaYjkg3BMEKOI7x58Amy2+N4g1oOYjy5LJ8arNLSW3Kt2mnlMrVdcouGdmaKtx+hUBYW2jUrAuqEVoBOTNI8pVCnjqjnRBJVqjRrVHwWOHohNya3Ol0FfYfyxuei8L4u1zQ3kFZOIEnRZXBHuBLwVf7OYhteuS7QCwSotvZk6npK0pTXATrPkqCUcxHBgbtMKseAu/Er9mRy1dDHIPbUCnbVCtDs+78XyUjez7vxKdifojvh7KOcJxcEQHAjzS/wBznmh93n6B34ewbISIp/dPVcp2J+id6HsgpdrcMfvKcdp8P+MLyF2FdzTDRfzWvWzL24nsD+1OHH3wqlbtrhxvK8nNJ/NIMK48ypqZO3E9Fxf9oLB8LVnuI9vazrNt5I92K7NUu5FSrTl5n4hoNoB0Wkfw+m1stps9glubGRhHOEeV4CnWxdT/ABXubT3J19AVqmV6FFgoguLW/Dm3J5qnxao4YnJlALz4QNFYxnZCo4SawDjtHylKUpWLCReMXGxKTwEDj6TXDNDxF528kL4px8U6jXUnS0z4Tq0j9FieIV3U6jmPnM0wjjuEd7hG1abT3kyb/EDyV45S2R1odLRGcXKWz2PSuDY3vKLHOIzOEkIhKwHZrhOMY6m5/wAAMkTJjlC9EDwRK0Qm2t0cnraIVWfCSafrx9CE1Aon4wJ2IIItbmhVXzWbqL5RlhFaaotZYWbiBHNZztfiX02h7THNXKbi26VzmVReCeRRjb3I48l4x7U9XKPKONcaJ8LSSTqea1HZLF4dlHPVAc43M7ItX7N0y7MGMWb7T9mKvx0oFtBumQbXKGX3RsWIB8cRwdVwytDTsYha3B4amGjSV5R2Y7N1nODnnKBsei9HpUagGoICk+cpZMu+MNjuK4BjgTAQjg3Be6cX7lFqjjHiKrOxLiCYsEiUoxeXyaIOzTpT2LzsW4GCrvCsW4uyn0Wdw3FabyBMHqtRwrD5fEd0KLJWT2YuzQoBMMS5EoKr4zH0qQmo9rfMwuk2kssxRi5PCWWTliTIFWocSpPALHtcCYEEFW1E0+CSi4vDWBvdhcnLkSp4N/5iPvYdp9R9Ex3bCl/9YfL6K3iOHYY6shNo9lGVPgY6OZsFn1R9GnS/ZSd20YNMM33H0VrgvaitiK9OhTpMaXugm5gC7jtsiVH+zynq5x8gtP2X7L0cPUzsbcA33uo2sbESNHUblaPwtF/RAn8ea+k4xk8RaPTdaHE1B3TwbWOq8n4nxSTljK1rtt+qy2ya4On9ndPC1vX4wQY81W1e9DsxBkHVNpdra0kuOa5N9j0VnhmJFR2UtJYdUQrdl6T705B5FVqk1szpdZ2otZSZgOJYw1arnu1K03Bu0T3uZh2w2bTyARbD9iwTDgpcd/Z4GDvaLstQXHVaIyyzl3Xwxg0fDK7Q4sbiQ6pGhAt5dEZwGJzg38TbOG3ovMMTxxtAhzqWSs0AH8JjXKVveyAcaXfPs6peOQ2T3g5rec5CeLEG2pVGeanxWJmo0RbdRYyq28eq53ULL1Lwa6cpYfkhqHkqFSRLmyCpnP6qji8S+IlJUsbj1F8DW4148U9IRbDVy8eIeXVZxpzgzqrGBrGkbzC01XNclLaU1tyH8S4sE5UyniiRY+iqv4gHjXX3XYbfl+al1u/xYuFWI/JFhjJu4ypWeOWtaTsY0SYfDPqGBYb9FZwtVwc+izK3IRmceomw5pdVTm9+Azls8fwYvEYN1KoW1AW3seiPYLjlan3dOzmucAHdOStYvDMqvLarw9rdAAQesnloh7MGwPyYd5ZBlwJzADm2dCqPpLIWa4S/T2ZXWbSriSWkMc3PFp0B6ryXjWKqd67vXE1AYM/p0W6l74Z3oBiQYHii1xyWC4jwnFuqvLqTnOBuWix5EHda+ozJI7P2LOFUp6mv8/wJwiqe9a4OgtMhet9n+Jisy58QsfqvF8PTqU3AuaWn/cCFsuzHFJeKbSQTNh+aXRNwlgt9r1O7+pHfCPSsw5rkC+zj8FT+Irlu1s85pBdLhFJt8oceZVsM5CFe7hd3KmkvqKQpqxROUeamFJCOP4l7crGa6lIvlohkdRFzngvV67Yvf5rN8W4fh69sjZ5/CQo6feXlxk/qkdQMTv7rL38+DbGnQ9mUqHATTMMcAOTvqEYw9CqzYHyP6Ic4VACATBTDUrxEkC/n5Sg7q/KZd0zl5QbbingSRGmpG6nGLbEveGhZlmBq1CGtJvfWAOZnYIrQ4EAA5uKBdeLHLvo6edpV65uX4U2KsojFby3JalDBucO8aHE3GYT7WR1ldghgsItyWYoYWq8ljwDkBJc4w5scnjmdPzU3DsQGuDZcb2GsXIBa4DT6q66j6bGSdcoSxLf8gljpa45bzpv6oY0G8mTui2LqgsLg64mfC52nMtBAQqixj2+F/jk+p6Tqk2xTeMmiq6KW5SrVnDZVjiwQeYVjFz8LwQdiEMfhzmj2I/VK7bRrUky2YfFo8k2qDoVFha0G4ghS42oCJ3/NF8BXI4C6M4QSQ0boLw9pcQNT+ZWx4Vwct8dTXZv1KlNcpvYX1FiisMK4emGMgD+ax3ahlVtRmR1q0+HKZB5ki5EBbN2kLzvtx2nxGGrBjqctABa4AwWx8M85v7LqaVhI5sJuMsoB9o8ZWwr+7qvBDhLCCQOvqEJo8Vqs8Ra4NLYDnAiT0KN9ncRQxjnYzFZT3ZLKbHCWgwHOeW77I/VxdPFMqUSwd3oHDQmPugHW0ztZUlFezo1XvTlx/UyPDeMVATD3FzrCeW0L1rgwY1guXEgZpMiYEkDZeMY3g76NVlNrw4VCcruUHcbQvYuy+WnTDYkxBJ1VFlSwV62cZRTiO47g6NSk4OA0JnlbUFYns1gK1Gs2o9kNNmuMEEHQ20W145h35HPpNzOAnJ+KAYy7T03WQo9szVqUqZYB3hhzTPg1EX3CkqdSbT3M9HVyri4cp/8AbG67x3MLkN7t/NcqZl6BiIfypMieE6VtMRAWrPdosLUcczTpstM4ILxeTO0aX1WTrPwGnpZNTyZdzngXATaVbXwmVYObmkM81zE2zqtoTN0KUvEaFLp1+SdI/F85VxRVxNXKxzm5h4SLagG0rInjtVrj48wiw0EjR0bHy5lbvieGfTol5huwtLpOnh84915zicFXaO/cw5XScwykXmTDdN9hEbLXVGSW50ugdEoyc8Z4X+jTYnj7zhaJDHaHvHub4HOzNAIP3oiNEKwvGGvrsNRrnta5pkR4YMy6wExIBsq/FeOMrUhSgwwNyWAuB0tHicPTqm0OL0m4J9ESHEEG33zo7MNobA805FXXFRyoYeX/AGbPSK3aljYJqU8u4aS6JMs01kC5jmFncTxOkK2dp8MtcGtAhuhIzec6SsPwguqEkxa07z/T80SeISOolqai1wHpvsnp2s2b/seluxGGxDbSzlNwLXk7eaD4vBVKUjJm8iCRy80C4ZxDKInVajAcRL2Cm4nKSBLSWuEnUkG45jcTqhG1y2mYOr6R9PJuveJm2vYfvX62hOqkxDvcLScS4PSfMgE8wI+azuL4NVp/A7MORujOloVXfFhbgeMpUBncczz8IiwGkzzRdnaVrpklsH9+iztHBl7Kb3tMgZbggHKduikbhG3ERf26iUmF04fFDZ01T+TC+J7TOYDABI9iOYP6K1S47SrgNe3NOsjQn81nn4Vs/EAY3uoKeGc0gtvGh5eiZ94sT34Kfd6WtuQjxDsvTIecM9tMvMkPaCPDrlI+GdFk+OcOxjBLqLyLR3JzsuSD4RfYHRaCliKjTJvEzPLkpqfFXtINzc7yUxdREMYWRWE8mW7J0azsQalZj2NA8DSHeGdbHTQL0PD4qAImFQo8eJIBtp89ZPT0V+lxEuBu14IG0AHqJ0j93CtmMnlMz2Rl5QRpY3zJ8ihlDshhxiXYt2bO45g0kZGki5AjVEKOOpn7wJjQQD6SlxDi4Q2Zn7w15q+pR35EaMv0S9+3mP36rlW+znmlS+9P0X7cPYdlLKYDK6VtMQ4lZ3jbXd5IBIjVHy5UuIVIY48gkdRDXD8tx9EtMzL1S7yVc5vxFQ1+IAlRMxLXODQQCSADtfmuWjqYaLmHoue4NaXE/v5LT8O4aykJMF51Maf8R+qC4erkYe7kQDLou6BPoJ2U9HiNVpcHAENAk3zkkXgjqP5ptFkFLdC7a5yWz/QGdvcbSAY2o892DmqU4M1RFmzIlskEggg5VhMNx04muMNQosDXnKwZcuUu++yPhDdTA2Prs+1VBuPphoeab2mWZ2gi4M3mw0J8t1N2E4TQwbJdBxB+KoR4XCTl7pxtlMSBrzXSV8cZRgnTNPdBLDdgMGwDPTaXAAGSTJHSYClxHZTC92WMpsYDcwIk8zzROtjgd7qqcRNglNxL9258yZ5rieCtwdV1Nru8DgHCx8IuACdzY+kKtWHlPREO2JJxjuWRntc/mShZrDQe/LyWaay8noqL264p+jmWuVZw3EqjXDKYJcPW4t+iqNBPwtLjOwJRfgHDXd42rVZDAQRMag28roKOWaLLYQi3Pf6HrTnMePE0O66+xFwheMbhwQLtnS4j53Q7G4vNlF2z94F0hwtpNx081ULHGxPiBtETqJg8pn5LXZck8JHla6PLYS4liaZaAHsaG6TtGsxKCuPl+/0VXEYeSd7mfSCbeqVj8oDdhYTqQsFjy8s3wioxwiUVRHPeISVjmvdvO5/JR1Kp1BTMx1zD5WRTfAH7LNKZ+KRvN/Y7JXtBNvnChpvG8T0TMRWEWMX3VvAvySilewCiqDZ0t8oSBx+UqzTqG3tf99VXShik0QMxDmGLO5E7X181qeE4gvZmJm/9dggVPChxF7rRYGgGNDR6q1WrV9BfUSi4/Unz9AuXQuWjLMmxZZWg30U7iqdcLsLiPun0Wt7GfGSw5ypY2S0gaxZWnhV6gQayFPDPM8fharHmWNJn9wosPiarHtd3QOUg/EdusW81u+I4EO2Qmlw2XtabAkAnpusUqUjox6jUtybhTC5odLiL732s8cx6ohLdL35/IK7imsYwMpNa3ew1OlzuUJOJcDlc2Z5fvXosksQeBilKzcWrhWHVs/rb56qOq1+Ylr5abQYgTaI0Ke/KXWdlPI262T6ryB4gI6ayN/O8op+iZa5/cruosPhcO6deA0uDYM3LQQGgR/Xe46rRYQAdLfETc3Ek29fLRQBlszbiLDkY1/fJDeI0H03d5Tk5pI2DSRBLkxWtcoihGTxkKYjCUK3xNF/Cc0C97AkG+sQhR7LYQaioJ+AueDFpJLbCPnrdJ9oNRoDyAYBBIsDtDeW/5q60PNrObccwJ8+hTe8vQNEobJ4BdfhoaPC6wBA8MknMCCLwRpOu4VjBmqLEy2RGx0mZ2RGnhiDc22HU2U7KGXSAN1SUm+Ng9xJYe5Fh6AAzHpb5STzT+5nX0Gka/X5qZ9UATHlzP8khrTp+/dFIQ5Nsgbgw4uzkxFo1nn18uqCY+m6k6D4gfhI+Ej10PRGcVXyjUdEILy55n4AILToSbiRzudLhUhHMsIbnEdTKlSvOv5qOri4sAev9SpquBZfuyXH8DiJsbim7R0G0G/mhzyLg03N89vomuDjyUU1Lgt0sT1dygn6JHH/e7yN/2VUY1oN3EdDPpupHwZj4omJgkc27FDDDsWqNQgiRHzaenRXGYg7/AKW5oXQxX8wdfY6+it0qkxYR0sqNF0zQcNqgxe6OU3brK8PokuBaeqPYurDco1Nh+qtW2Jtis7En94s5rlQ+zDkuTsMXiIcqVZ2Qw4gl7mm0QR9fyRIsCCcYdkqMeBa7T63/AEXRlHYTFIOYPFh4yn4h8+qkc1ZQ4twIcLHZaPhuPbVbycNR+vkkcFZRJXU1XqYQTMK/CjxNVrGlztBr6qSwllgjnOEDq5uRG6qVWD+qTHYsG+m+tiPPyUDqoaG6BvQkgA9R+q5Ox0EmifuhliJ8+SgqUnsu24sSHGx8uXmkdXH4he4It7XVptQOGUnxaFukg/ojpXgmprkrYas112mHGZadesc9FNQMghwAy67zP6JBhw3xEG3qbC0KVhaRPyJ+UKJMja8A/FYcF4M2NyPLT0hWaZtA+S6thZNz6JzGgecfuEY7eAykmuSRjbC/1905oiTb8/z3SAey5xOgt1TORIlSs0EWLnaCOvXQaqJ+fo0cp+QTa1TKIaL6ydyqNaoSfE8DoLED3Rk/BaERnEcSxgEkk7wJ0G1t0JHHWCQIF5y3gzoZiT1vOqdxIub93MD1WUx+Fe05gDl52PuRujVLHgZZDbk0bcYyryLzz2AA+8NZ5RaIV3CcPqVz3bQ54gkTAcwCQJcbRI0PpCx2Aa7MADHMzG177aLQ4TiNdobQaXMovIfUcBlzgaAnUtAi0wtKkmtzPKOOCnicc+k806ogi17gjo4W94S08e028PkHAkegK9A/uPCY7/EZZ2X4Q7xGNCWkRMRMW80A4j/Z865awPA2Fni27Dv5SqOr0FXewMMQw/EHDyJj2Ckp5Zlpueus6x9FAOyxnwl7I2k2/wCpsrzOAARrO5BiTuY/eqq62XViLvB8cRUAOnMAxfSTotIDmdOwsP1WXwfAqgcCHOAH6+y19DCui9vzQrqaZW6yL4OyrlY7gcz7Llo0mbJYIQvjtGWabj6fqigJ2BUGLpFzCOh9FsItmZxrJpg77+ip0sQ6m8OaYI+fQoxh6R8Q6yPW6GY/DQUuUQp74NTwziDazMw1Go3B5eXIp+O8THNO4WHweMfSfnbruNiNwVssJi21mBzT5jcHkUmS2wwYw8oyr8U4EsEZmm7SJDhziZBjklp8TaLObkdMzHhj6eaKcc4O2sJ+GoPheNR0PMdFlK9R9IltZt/xbH6LFOhx4NsLlJbhisGkkmQQMxAvbf8AP5qSlTDgDMwJk/lrqhmDxIH+W4CbQbgzFunorQc1r8klpcetzy5JDTQzIdwdcuF/MdR0TcWyLj5+cqDD1WvYADdtmnQmNj1srVKtm8J13HlqVORfDBv25xMaG3r5FXqEqjiqBD5Gh25IhTPhUhnO5azGMokqvgT+7Kg7Gl2gsNTt7JcdXbBzODQNbqoyrmsBlYNCRc+Q+qa34Fxj5ErVhMvIJvpsPLyVTv3Ou2w/nqpg+mLAA+ev7mfZVatRzrMF9zsPJBJt7DdktyjxJhdYGOuhMch+wkw5Agbfn5q5T4bN3Ekq03g+bRaIVtCZ2J7Ap3Dab5iWTrlsD5t0UmH4G861hAHghsX2zEk2V13CqjdLqfC4DEHRiZj6Cm/ORuFbUa8ZAWEaNBNzuaR3j8Mk8p0Ws4b2lsBiBnboKjdRzB/UWPMIFUwlQNh5Z0Alx+Vh7pjGVImoL6ZhGcj/AHMNqg6G/IhBKUX8Qtxkvkb+rg6NduYQ8EWc2zvU7+qG1eB5bgZh019R/VZnD16tH/EpvgE/E2TTPR4N2Ho70JWr4X2nY8hlYd2/n91x6HbyKbGals9mInXKO63RQdXY2w15D6qJ2IcdLfmtVisBTqXc0E/iFj77oTiOCOHwHMOWh+hTMC1JMEy7mfcpFd+wVPwO9kqISyEjkwgriU0sDskOFun0UeNwoOys4gXPofZStAI0UYJc5MdjcLBUeBxTqTszfUbEcitHjsHKBYnCkFJki8ZZNPg8Yys2RruNx5/VVuI8Oa9pDgD5oDhHOYQ5pg/vVaPB44PEGx/eiWRrG6PPeK9mX0nOfQJbO2x90nDOOvaQyuAHA2MWI8zoV6RXw4cFnuJ8EkGLSCJHIpU6kxsLfZUZVZctEh13a2I3jn9ES75rwL32cN/PkVkKeBr4Z0iXs5G5HkreG4iHHw2IvB57yFknW0aYyUg42u6YJ33CsurGLXJQ4VRZxI90oxU2bfroPdVriWsGGmM7iXZjMxAgfqo/tTnGII/fv+Skbhi4+MzzAsPkr1DBxo2PkmqpvkW7UgfhsFMl/o0ACOsj6ohRw4FgFcZhxufZPNZjeQ81ohBR4ETschlHCTsrtOi1up9robU4pyk/IKI4l56eSckxLYXqYpjdh5u+ip1eJzYSfkPZURTB1upaVMK2n2QkbVcenkpqdMJtNgVgBWAxncbtMGIPIjk4aOHmq5w+0Af7T8J/4E/D/wATbyRAAJxYCL3VJ1qQYzcReF46rSswktGtN+o/4k6eXzWlwPFqdS3wu3DrFZum3n6HcdDzCsHDA6zOzhq3/wDQStUoPD4LShGe6NVZKsr9lf8A67fY/VKr96IrtMlceSaKZ1JTs6jNSVrLjK4Fo8ikwo1CjrusfddhneLa6gJLYsvpyh+Kwk7IuG+SQ01RikzJ1cIRsn0KULQYqmwCSQPMrP4/ilMWbfrt7pUojoyyX6eILRKe3iFM62XnXF+31KmcrZqHfIQGj/tuu4Z21w1axPdu5PsD5PFvdUUWWaR6FUFF33gh+I4Vh3XJbPMa/JCm1pEh1vce4sngv2PtCji2RPHDJ28HoNMgk+5/NTinSbt7lUDTedS5MGEnWSh2y2tl88Qpt0I9AoncTJ+Fvuo24UBS9wrqCK5ZE6vUdvA6WXNoKwyiE9lNWRUibSCka1OyJzWqEEClaVGGKVlNEBI2pCkY9MpUVOykpgGRzCp2BJTpqywDorFRrGKwxsCP2PJc1zeYU7XN5j3QlFSWGRNrdEWd3T2XKxnbzHuuSfu8S/dfoFuekYVAaqTvVrLYJ6r1Rc9wYXNMuaDA2MbKUvVRtYAuBRQUtjF1v7UsQJHcQRb2VDEf2mYo/cj1j8gr3EsA0VXyBBMj1VR2AZyWOVjTwXVSA2L7aYl+zQesu/NA8dxPE1rPqGOQsPYLUVeGt5IbiuF8lTuMtoMz9mKQ4VEa+EIVcsKmpgwhMLUrUv8ALqPb5Ex7aIvh+0uNb/8AIHf8mtKEgKdlLmUdbBpRoaXbPFDVlM/xD9Vbp9uK+9Fvo530WSczkU7I4GDIQ1yDpibJnbepvR/9/wCSU9uKm1EfxfyWNk80oceamuRNMTYDttW/0m/xH6JW9t63+k3+J30WTaHc04B3NDXIOiJrW9tqv+k3+Ipv/mdf/TZ7uWYptcrFNpU1zJoiHj2vxR0ZT/8AY/quZ2oxnKl/C76oW1hUxYQjrn7Doh6Cg7T4v8NL2d9U89qMUfu0vZ31VDLbdRuzIdyfsKhD0E//ACbHnQUR/wBSf1SjtFxLbuP4f5oXTcdyVbo1TZV7k/Ye3D0W2doeJnah/B/NWGcd4nyo/wAH80uHqc1OAdQTHJTuT9k7cPRB/f8AxL8NH+A/VKppd1XKdyfsPagapqcuXLomcWvohzvj9Ei5WQUBeNf5noFQclXLnW/iY+PBBV0KqVNFy5KCBschNVcuVkUkRFKFy5WKj2KXE/EVy5TwDyRp7Fy5AsTMU7Fy5EiLFJTsSrkGWJ6anfsuXIBHjRMeuXIBRAVZp6hKuQYUEsOibdFy5REY9cuXIlT/2Q==",
//             title:"kottu"
//           }
//         }
//     }
//     render() { 
//       //const classes = useStyles();
        
//         return ( 
        
//         <div>
//             <div className="justify-content-center text-center">
//               <button className="dropbtn"  style={{backgroundImage:`url(${logo})`,height:100,width:100}}></button>
//               <p>The Kingsbury Hotel</p>
//               </div>
//         <div className="scrolling-wrapper">
//         <div className="card" style={{backgroundImage:`url(${pastry})`}}><h5>Pastry</h5></div>
//         <div className="card"><h5>Cakes</h5></div>
//         <div className="card"><h5>Dessert</h5></div>
//         <div className="card"><h5>Kottu</h5></div>
//         <div className="card"><h5>Pizza</h5></div>
//         <div className="card"><h5>Pudding</h5></div>
//         <div className="card"><h5>Noodles</h5></div>
//         <div className="card"><h5>Rice</h5></div>
//         <div className="card"><h5>Card</h5></div>
//       </div> 




      
//       </div>
      
      
      
//       );
//     }


    
// }
 
// export default Cardimg;


import React from 'react';
import "./Style.scss";
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FeedbackIcon from '@material-ui/icons/Feedback';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
//import tileData from './tileData';
import logo from '../../assets/img/brand/logo2.png'
import Menu from "./Menu";
import * as BaseService from "../../BaseService.js";
import InfiniteScroll from 'react-infinite-scroll-component';
import Rating from '@material-ui/lab/Rating';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Swal from 'sweetalert2';

import {
  
  ModalBody,
  ModalHeader,
  Modal,
  ModalFooter,
  Button,
  Form, FormGroup, Label, Input, FormText
} from "reactstrap";

const useStyles =theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});




class Cardimg extends React.Component {
  constructor(props){
             super(props);
             this.state={
               categories:[],
               Items:[],
               initialCatID:"",
               filteredItems:[],
               length:0,
               limit:100,
               pageNumber:1,
               large:false,
               is_first_time:"",
               satisfactionrating:"",
               hygeinerating:"",
               foodrating:"",
               name:""
             }
            
            }

            componentDidMount=async()=>{

              await this.getItems(1);
              // if(localStorage.getItem("sub_domain")!==null)
              // {
              //   await this.getItems(1);
              // }else{

              //   window.location.href="#/main";
              //   Swal.fire({
              //     icon:'error',
              //     title:'Oopss....',
              //     text:'Please Scan QR Code First'
              //   })
              // }
              

            
            }


            getItems=(x)=>{
              this.setState({pageNumber:x})
              const url= "/api/digital_user/viewallitems/";
              const paramdata={
                page:this.state.pageNumber,
                limit:this.state.limit,
                sub_domain:localStorage.getItem("sub_domain")
              }
              BaseService.GetDataWithParams(url,paramdata)
                .then(async(res) => {

                  if(res.data.data===null)
                  {window.location.href="#/main";
                    Swal.fire({
                      icon:'error',
                      title:'Oopss....',
                      text:'Invalid Sub_Domain.'
                    })
                  }else{
                  
                  if (res.data.success === true) {

                  
                    
                   
                      
                      res.data.data.data.map((value)=>{



                          const catergory= {
                            catID:value.Category.id,
                            catName:value.Category.category_name,
                            catImage:value.Category.categoryImages[0].image
                          }

                          const User={
                            //username:value.user_data.business_name,
                            //userImage:value.user_data.logo_url
                          }

                         this.setState({
                          categories:[...this.state.categories,catergory],
                          length:res.data.data.count
                          },()=>{




                          


                            value.Category.items.map(async(value2)=>{
                            console.log(value2.id)
                            const items=  await{
                             catID:value.Category.id,
                              itemID:value2.id,
                              item_name: value2.item_name,
                            price: value2.price,
                            preparing_time: value2.preparing_time,
                            description: value2.description
                            }

                             await this.setState({
                          Items:[items,...this.state.Items]
                      },()=>console.log(this.state.Items))


                          })

                        })
                      })//end of catergory
                   
                  
                    
                     
                  }
                await  this.setState({
                    initialCatID:res.data.data.data[0].Category.id
                },console.log("hi"))
this.onCatergoryClick();
}

              }).catch((err)=>{


              })
        

            }




            toggleLarge1=()=> {
              this.setState({
                large: !this.state.large,
              });
            }




            onCatergoryClick=()=>{

              
         
          

          this.state.Items.map(async(value)=>{
            
            console.log(this.state.initialCatID+" "+value.catID)
            if(value.catID===this.state.initialCatID){
              
const filteredItems=await{
  catID:value.catID,
  itemID:value.itemID,
  item_name: value.item_name,
price: value.price,
preparing_time: value.preparing_time,
description: value.description

}
await this.setState({
  filteredItems:[filteredItems,...this.state.filteredItems]
})

            }
          })

            }



            changeHandler=(event)=>{

              this.setState({
                [event.target.name]:event.target.value
              
              })
            }


            onSubmitHandler=(e)=>{

              e.preventDefault();

              const formData={

                feedback:this.state.feedback,
                name:this.state.name,
                email:this.state.email,
                is_first_time:this.state.is_first_time,
                rate_satisfaction:this.state.satisfactionrating,
                rate_hygiene:this.state.hygeinerating,
                rate_taste:this.state.foodrating,
                is_come_back:this.state. is_come_back,
                sub_domain:"avb"
              }

              const url="/api/digital_user/getcustomerfeedback/";              

              BaseService.PostService(url,formData).then(async(res) => {
                console.log(res);
                if(res.data.success===true)
                {
                  Swal.fire(
                    'Good Job!',
                    'Your feedback is succesfully submitted',
                    'success'
                  )

                  this.setState({
                    large:false,
                    feedback:"",
                    name:"",
                    email:"",
                    rate_hygiene:0,
                    rate_satisfaction:0,
                    rate_taste:0

                  })

                

              }
              }).catch(()=>{})

Swal.fire({
  icon:'error',
  title:'Oopss....',
  text:'cannot perform operation'
})
            }




            render() { 
              const {classes} = this.props;
              return(
<div>


<div><InsertEmoticonIcon fontSize="large" onClick={this.toggleLarge1}/></div>
<div className="justify-content-center text-center">
              <button className="dropbtn"  style={{backgroundImage:`url(${logo})`,height:100,width:100}}></button>
              <p>The Kingsbury Hotel</p>
              </div>
              







              <Modal
            isOpen={this.state.large}
            toggle={this.toggleLarge1}
            className={"modal-lg " + this.props.className}
          >
            <ModalHeader><KeyboardBackspaceIcon onClick={this.toggleLarge1}/>    Customer Feedback</ModalHeader>

            <ModalBody>

              <form onSubmit={this.onSubmitHandler}>
              <FormGroup>
              <p>Is this first time at our restaurant?</p>
              <Button color="success" style={{borderColor:this.state.color}} onClick={()=>{this.setState({is_first_time:true,color:"yellow",color2:"green"});}}>Yes</Button>{' '}
              <Button color="success" style={{borderColor:this.state.color2}} onClick={()=>{this.setState({is_first_time:false,color:"green",color2:"yellow"});}}>No</Button>{' '}
              </FormGroup>


              <FormGroup>
              <p>What is your overall satisfaction with our restaurant?</p>
              <Rating
        name="satisfactionrating"
        value={this.state.satisfactionrating}
        precision={1}
        onChange={(event, newValue1) => {
          //this.addrating(newValue);
          console.log(newValue1)
          this.setState({
            satisfactionrating:newValue1
          })
        }}
        onChangeActive={(event, newHover) => {
          //setHover(newHover);
        }}

        size="large"
      />
              </FormGroup>




              <FormGroup>
              <p>How would you rate the hygeine?</p>
              <Rating
        name="hygeinerating"
        value={this.state.hygeinerating}
        precision={1}
        onChange={(event, newValue2) => {
          this.setState({
            hygeinerating:newValue2
          })
        }}
        onChangeActive={(event, newHover) => {
          //setHover(newHover);
        }}

        size="large"
      />
              </FormGroup>


              <FormGroup>
              <p>How would you rate the taste of our food?</p>
              <Rating
        name="foodrating"
        value={this.state.foodrating}
        precision={1}
        onChange={(event, newValue3) => {
          this.setState({
            foodrating:newValue3
          },()=>console.log(this.state.foodrating))
        }}
        onChangeActive={(event, newHover) => {
          //setHover(newHover);
        }}

        size="large"
      />
              </FormGroup>


              <FormGroup>
              <p>Would you come back to eat with us again?</p>
              <Button color="success" style={{borderColor:this.state.color3}} onClick={()=>{this.setState({is_come_back:true,color3:"yellow",color4:"green"});}}>Yes</Button>{' '}
              <Button color="success" style={{borderColor:this.state.color4}} onClick={()=>{this.setState({is_come_back:false,color4:"yellow",color3:"green"});}}>No</Button>{' '}
              </FormGroup>

              <FormGroup>
        <Label for="exampleText">Is there anything you want to tell us?</Label>
        <Input type="textarea" name="feedback" id="exampleText" onChange={this.changeHandler} value={this.state.feedback} />
      </FormGroup>

      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter your name" value={this.state.name} onChange={this.changeHandler} />
      </FormGroup>

      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" value={this.state.email} onChange={this.changeHandler} />
      </FormGroup>

      <Button color="success">Submit Feedback</Button>{' '}
      </form>
            </ModalBody>
             
             </Modal>


<div >
  <GridList className={classes.gridList} cols={2.5}>

    {this.state.categories.map((tile) => (
      <GridListTile key={tile.catID}
      onClick={()=>{this.setState({initialCatID:tile.catID,filteredItems:[]},()=>{this.onCatergoryClick();});}}
      
      >
        <img src={"https://onepayserviceimages.s3.amazonaws.com/"+tile.catImage} style={{width:"100%"}} alt={tile.catName} />
        
        <GridListTileBar
        
          title={tile.catName}
          classes={{
            root: classes.titleBar,
            title: classes.title,
          }}
          actionIcon={
            <IconButton aria-label={`star ${tile.catName}`}
            >
              <StarBorderIcon className={classes.title} />
            </IconButton>
          }
        
        />
      </GridListTile>
      
    ))}
    
  </GridList>
</div>

<div className="d-flex justify-content-center">

{this.state.filteredItems.length===0?<p>No items available</p>:
<Menu item={this.state.filteredItems}/>}

</div>



          
       

</div>
              );
            }


}



export default withStyles(useStyles)(Cardimg);