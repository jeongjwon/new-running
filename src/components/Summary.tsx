import styled from "styled-components";
import { Record } from "./Board";

type SummaryProps = {
  monthlyRecord: Record[];
};

const Summary = ({ monthlyRecord }: SummaryProps) => {
  const calculateTotalDistanceAndTime = (monthlyRecord: Record[]) => {
    let totalDistance = 0;
    let totalHour = 0;
    let totalMinute = 0;
    let totalSecond = 0;
    let totalPaceMin = 0;
    let totalPaceSec = 0;
    let totalTime = 0;

    // monthlyRecord 배열을 순회하면서 거리(distance)와 시간(hour, minute, second)을 더합니다.
    monthlyRecord.forEach((record: Record) => {
      totalDistance += record.distance;
      totalHour += record.hour;
      totalMinute += record.minute;
      totalSecond += record.second;
    });

    totalTime =
      totalHour === 0
        ? totalMinute * 60 + totalSecond
        : totalHour * 60 * 60 + totalMinute * 60 + totalSecond;

    const formattedTotalDistance = totalDistance.toFixed(1);

    const totalPaceSeconds = totalHour * 3600 + totalMinute * 60 + totalSecond;
    const totalPacePerKilometer = totalPaceSeconds / totalDistance;
    totalPaceMin = Math.floor(totalPacePerKilometer / 60);
    totalPaceSec = Math.floor(totalPacePerKilometer % 60);

    // 초(second)를 분(minute)과 시간(hour)로 변환합니다.
    totalMinute += Math.floor(totalSecond / 60);
    totalSecond %= 60;
    totalHour += Math.floor(totalMinute / 60);
    totalMinute %= 60;

    // 평균 페이스의 초를 두 자릿수로 포맷팅
    const formattedPaceMin = isNaN(totalPaceSec)
      ? "00"
      : String(totalPaceMin).padStart(2, "0");

    const formattedPaceSec = isNaN(totalPaceSec)
      ? "00"
      : String(totalPaceSec).padStart(2, "0");

    // 총 걸린 시간을 시, 분, 초로 나누고 각각을 두 자릿수로 포맷팅
    const formattedTotalHour = String(Math.floor(totalTime / 3600)).padStart(
      2,
      "0"
    );
    const formattedTotalMin = String(
      Math.floor((totalTime % 3600) / 60)
    ).padStart(2, "0");
    const formattedTotalSec = String(
      Math.floor((totalTime % 3600) % 60)
    ).padStart(2, "0");

    return {
      formattedTotalDistance,
      formattedTotalHour,
      formattedTotalMin,
      formattedTotalSec,
      formattedPaceMin,
      formattedPaceSec,
    };
  };

  const {
    formattedTotalDistance,
    formattedTotalHour,
    formattedTotalMin,
    formattedTotalSec,
    formattedPaceMin,
    formattedPaceSec,
  } = calculateTotalDistanceAndTime(monthlyRecord);

  const titles = [];
  const sumTitle = ["킬로미터", "러닝", "평균 페이스", "시간"];

  return (
    <SummaryDiv className="summary">
      <div className="memo">
        <div>{formattedTotalDistance}</div>
        <div>킬로미터</div>
      </div>
      <div className="memo">
        <div>{monthlyRecord.length}</div>
        <div>러닝</div>
      </div>
      <div className="memo">
        <div>{`${formattedPaceMin}'${formattedPaceSec}"`}</div>
        <div>평균 페이스</div>
      </div>
      <div className="memo">
        <div>{`${formattedTotalHour}:${formattedTotalMin}:${formattedTotalSec}`}</div>
        <div>시간</div>
      </div>
    </SummaryDiv>
  );
};
const SummaryDiv = styled.div`
  /* background: lightgray; */
  background: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
  padding: 0.5rem 1rem;
  /* border: 0.1rem solid #2e2e2e; */
  margin: 1rem 1rem 0 1rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-evenly;

  > .memo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;
    > :first-child {
      font-size: 1.2rem;
      font-weight: 500;
    }
    > :nth-child(2) {
      font-size: 0.8rem;
      font-weight: 400;
      color: darkgray;
    }
  }
`;
export default Summary;
