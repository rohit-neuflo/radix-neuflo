// Calendar.tsx
import React, { useState } from "react";
import { DatePicker, ConfigProvider } from "antd";
import dayjs from "dayjs";
import { styled } from "../stitches.config";
import "./datepicker.css";

const { RangePicker } = DatePicker;

type RangeValue = [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;

const CustomRangePicker1 = styled(RangePicker, {
  fontFamily: "Poppins",
  width: "50%",
});

type CustomRangePickerProps = {
  type: "a" | "s";
};

const CustomRangePicker = React.forwardRef<
  React.ElementRef<typeof CustomRangePicker1>,
  React.ComponentPropsWithoutRef<typeof CustomRangePicker1> &
    CustomRangePickerProps
>(({ type, ...props }, ref) => <CustomRangePicker1 ref={ref} {...props} />);

type CalendarProps = {
  range?: boolean;
};

const Calendar: React.FC<CalendarProps> = ({ range = false }) => {
  const [dates, setDates] = useState<RangeValue>(null);
  const [customRange, setCustomRange] = useState<string>("");

  const handleCustomRangeChange = (value: string) => {
    setCustomRange(value);
    let startDate: dayjs.Dayjs | null = null;
    let endDate: dayjs.Dayjs | null = null;

    switch (value) {
      case "today":
        startDate = dayjs().startOf("day");
        endDate = dayjs().endOf("day");
        break;
      case "yesterday":
        startDate = dayjs().subtract(1, "day").startOf("day");
        endDate = dayjs().subtract(1, "day").endOf("day");
        break;
      case "thisWeek":
        startDate = dayjs().startOf("week");
        endDate = dayjs().endOf("week");
        break;
      case "lastWeek":
        startDate = dayjs().subtract(1, "week").startOf("week");
        endDate = dayjs().subtract(1, "week").endOf("week");
        break;
      case "thisMonth":
        startDate = dayjs().startOf("month");
        endDate = dayjs().endOf("month");
        break;
      case "lastMonth":
        startDate = dayjs().subtract(1, "month").startOf("month");
        endDate = dayjs().subtract(1, "month").endOf("month");
        break;
      default:
        break;
    }

    setDates([startDate, endDate]);
  };

  const customRanges = [
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
    { value: "thisWeek", label: "This Week" },
    { value: "lastWeek", label: "Last Week" },
    { value: "thisMonth", label: "This Month" },
    { value: "lastMonth", label: "Last Month" },
  ];

  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const handleOptionMouseOver = (value: string | null) => {
    setHoveredOption(value);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            fontFamily: "Poppins",
            cellHeight: 40,
            cellWidth: 40,
            cellHoverBg: "#47aad41a",
            cellHoverWithRangeBg: "#47aad42a",
            cellActiveWithRangeBg: "#47aad41a",
            hoverBorderColor: "#47aad41a",
            cellRangeBorderColor: "none",
          },
        },
      }}
    >
      {range ? (
        <CustomRangePicker1
          value={dates}
          onChange={(val) => {
            setCustomRange("");
            setDates(val);
          }}
          popupClassName="createDateRangePicker"
          format="YYYY-MM-DD MMMM"
          renderExtraFooter={() => (
            <div style={{ width: "fit-content" }}>
              {customRanges.map((range) => (
                <div
                  key={range.value}
                  onClick={() => handleCustomRangeChange(range.value)}
                  className={`${
                    customRange === range.value
                      ? "custom-range-option selected"
                      : "custom-range-option"
                  }`}
                  onMouseOver={() => handleOptionMouseOver(range.value)}
                  onMouseOut={() => handleOptionMouseOver(null)}
                  style={{
                    width: "100px",
                    paddingLeft: "10px",
                    borderRadius: "8px",
                    color: hoveredOption === range.value ? "#47aad4" : "black",
                    background:
                      hoveredOption === range.value
                        ? "#47aad41a"
                        : "transparent",
                    cursor: "pointer",
                  }}
                >
                  {range.label}
                </div>
              ))}
            </div>
          )}
        />
      ) : (
        <DatePicker
          onChange={(val) => {
            setCustomRange("");
            if (val) {
              setDates([val.startOf("month"), null]); // Set the start of the month
            }
          }}
          popupClassName="createDateRangePicker"
          format="YYYY-MM-DD MMMM"
        />
      )}
    </ConfigProvider>
  );
};

export default Calendar;
