import React, { useState } from "react";
import Calendar from "react-calendar";
import { styled } from "@stitches/react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "react-feather";

const DatePickerWrapper = styled("div", {
  position: "relative",
  display: "inline-block",
  fontFamily: "Poppins",
});

const CalendarContainer = styled("div", {
  position: "absolute",
  zIndex: 1,
  backgroundColor: "white",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CalendarHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "16px",
});

const CalendarNavButton = styled("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "20px",
  color: "#333",
  outline: "none",
});

const MonthDropdown = styled("select", {
  fontSize: "16px",
  padding: "4px",
  borderRadius: "4px",
});

const YearDropdown = styled("select", {
  fontSize: "16px",
  padding: "4px",
  borderRadius: "4px",
});

type CalendarChangeType = Date | Date[] | null;

const DatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };

  const handleStartDateChange = (date: Date | Date[] | null) => {
    if (Array.isArray(date)) {
      setStartDate(date[0]);
      setEndDate(date[1]);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date: Date | Date[] | null) => {
    if (Array.isArray(date)) {
      setStartDate(date[0]);
      setEndDate(date[1]);
    } else {
      setEndDate(date);
    }
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonthIndex = parseInt(event.target.value, 10);
    setSelectedMonth(selectedMonthIndex);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYearValue = parseInt(event.target.value, 10);
    setSelectedYear(selectedYearValue);
  };

  const generateMonthOptions = () => {
    const monthOptions = [];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    for (let i = 0; i < monthNames.length; i++) {
      monthOptions.push(
        <option key={i} value={i}>
          {monthNames[i]}
        </option>
      );
    }

    return monthOptions;
  };

  const generateYearOptions = () => {
    const yearOptions = [];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      yearOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return yearOptions;
  };

  return (
    <DatePickerWrapper>
      <button onClick={toggleDatePicker}>Select Date Range</button>
      {isOpen && (
        <CalendarContainer>
          <CalendarHeader>
            <CalendarNavButton
              onClick={() => setSelectedMonth(selectedMonth - 1)}
            >
              <ChevronLeft />
            </CalendarNavButton>
            <MonthDropdown onChange={handleMonthChange} value={selectedMonth}>
              {generateMonthOptions()}
            </MonthDropdown>
            <YearDropdown onChange={handleYearChange} value={selectedYear}>
              {generateYearOptions()}
            </YearDropdown>
            <CalendarNavButton
              onClick={() => setSelectedMonth(selectedMonth + 1)}
            >
              <ChevronRight />
            </CalendarNavButton>
          </CalendarHeader>
          {/* Type assertion for the onChange prop */}
          <Calendar
            selectRange
            value={startDate && endDate ? [startDate, endDate] : startDate}
            // Use the custom handlers and assert the type
            onChange={handleStartDateChange as any}
            view={"month"}
            activeStartDate={new Date(selectedYear, selectedMonth, 1)}
          />
        </CalendarContainer>
      )}
      {startDate && (
        <p>
          Selected Date Range: {startDate.toLocaleDateString()} -{" "}
          {endDate?.toLocaleDateString()}
        </p>
      )}
    </DatePickerWrapper>
  );
};

export default DatePicker;