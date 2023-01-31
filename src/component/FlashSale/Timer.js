import { useState,useEffect,useRef } from "react";
import { Box,Text,Flex } from "@chakra-ui/react";
import axios from 'axios';
import Countdown from 'react-countdown';
export default function Timer() {
    const Completionist = () => <span>You are good to go!</span>;
    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return <span>{hours}:{minutes}:{seconds}</span>;
        }
      };
    
const [timerDays,setTimerDays] = useState('00');
const [timerHours,setTimerHours] = useState('00');
const [timerMinutes,setTimerMinutes] = useState('00');
const [timerSeconds,setTimerSeconds] = useState('00');
const [items, setItems] = useState("");
const [on, setOne] = useState("0");

// const url = ('http://localhost:8000/api/flashtime/1')
// useEffect(() => {
//     axios.get(url).then((response) => {
//         const a = response.data.data[0]
      
//       setItems(a.sale_date);
//       setOne(a.status);
//       console.log(a)
//     });
//   }, [url]);

let interval = useRef();

const startTimer = () => {
    const countdownRate = new Date("2023/10/10  12:00:00");
    interval = setInterval(() => {
const now = new Date().getTime();
const distance = countdownRate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
const minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60 ));
const seconds = Math.floor(distance % (1000 * 60 ) / (1000 ));

        if (distance < 0 ){
            //stop timer
clearInterval(interval.current);
        }else{
            //update timer
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);

        }

},1000);
}

useEffect(() => {
    startTimer();
    return() => {
        clearInterval(interval.current);
    };
     })

     
return<>
<Flex >
{/* {on === "1" && ( */}
  <Text textAlign={'center'} bg="white" rounded="lg" color="red" w="8">{timerHours}</Text>
&nbsp;: &nbsp;
<Text textAlign={'center'} bg="white" rounded="lg" color="red" w="8"> {timerMinutes}</Text>
&nbsp;: &nbsp;
<Text textAlign={'center'} bg="white" rounded="lg" color="red" w="8">{timerSeconds} </Text> 
{/* )} */}
</Flex>
</>
}