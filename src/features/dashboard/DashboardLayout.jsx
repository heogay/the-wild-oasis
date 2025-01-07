import styled from "styled-components";
import useRecentBookings from "../bookings/useRecentBookings";
import useRecentStays from "../bookings/useRecentStays";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import SalsChart from "./SalesChart";
import { ResponsiveContainer } from "recharts";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-columns: repeat(4 1fr); */
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { isPending: isPendingBookings, bookings } = useRecentBookings();
  const {
    isPending: isPendingStays,
    numDays,
    confirmedStays,
  } = useRecentStays();
  const { isPending, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isPendingBookings || isPendingStays || isPending) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalsChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
