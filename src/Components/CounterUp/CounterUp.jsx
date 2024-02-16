import CountUp from 'react-countup';

const CounterUp = ({ start, end, duration }) => {
  return (
    <>
      <CountUp start={start} end={end} decimal="," duration={duration} />
    </>
  )
}

export default CounterUp