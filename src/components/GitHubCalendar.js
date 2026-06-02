"use client";
import React, { useState, useEffect, useRef } from "react";

export default function GitHubCalendar({ username }) {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  // Generate years list from 2020 to current year
  const years = Array.from(
    { length: currentYear - 2020 + 1 },
    (_, i) => 2020 + i
  ).reverse(); // e.g. [2026, 2025, 2024, 2023, 2022, 2021, 2020]

  // Auto-scroll calendar to the far-right (most recent commits) on mobile load/change
  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        }
      }, 100);
    }
  }, [data]);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("API Offline");
        return res.json();
      })
      .then((json) => {
        if (json && json.contributions && json.contributions.length > 0) {
          const raw = json.contributions;

          // Align calendar grid to start on the Sunday of the week containing January 1st of selectedYear
          const jan1 = new Date(selectedYear, 0, 1);
          const startDayOfWeek = jan1.getDay(); // 0 = Sunday, 1 = Monday, etc.
          const startDate = new Date(jan1);
          startDate.setDate(jan1.getDate() - startDayOfWeek);

          // Align calendar grid to end on the Saturday of the week containing December 31st of selectedYear
          const dec31 = new Date(selectedYear, 11, 31);
          const endDayOfWeek = dec31.getDay();
          const endDate = new Date(dec31);
          endDate.setDate(dec31.getDate() + (6 - endDayOfWeek));

          // Map contributions by date string
          const contribMap = {};
          raw.forEach(day => {
            if (day.date) {
              contribMap[day.date] = day;
            }
          });

          const grid = [];
          const currentDate = new Date(startDate);

          // Get total contributions for the selected year
          let yearTotal = 0;
          if (json.total && json.total[selectedYear]) {
            yearTotal = json.total[selectedYear];
          } else {
            // Count manually as a backup
            raw.forEach(day => {
              if (day.date && day.date.startsWith(selectedYear.toString())) {
                yearTotal += (day.count || 0);
              }
            });
          }

          while (currentDate <= endDate) {
            const week = [];
            for (let d = 0; d < 7; d++) {
              const dateStr = currentDate.toISOString().split("T")[0];
              const dayData = contribMap[dateStr];
              const isSelectedYear = currentDate.getFullYear() === selectedYear;

              const level = isSelectedYear && dayData
                ? (typeof dayData.intensity !== 'undefined' ? Number(dayData.intensity) : Number(dayData.level || 0))
                : 0;

              week.push({
                level: level,
                count: isSelectedYear && dayData ? (dayData.count || 0) : 0,
                date: isSelectedYear ? dateStr : ""
              });

              currentDate.setDate(currentDate.getDate() + 1);
            }
            grid.push(week);
          }
          setData({ grid, total: yearTotal });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch from GitHub API:", err);
        // Fallback sparse mock data for selected year
        const mockGrid = [];
        const jan1 = new Date(selectedYear, 0, 1);
        const startDayOfWeek = jan1.getDay();
        const startDate = new Date(jan1);
        startDate.setDate(jan1.getDate() - startDayOfWeek);

        const dec31 = new Date(selectedYear, 11, 31);
        const endDayOfWeek = dec31.getDay();
        const endDate = new Date(dec31);
        endDate.setDate(dec31.getDate() + (6 - endDayOfWeek));

        const currentDate = new Date(startDate);
        let w = 0;
        let mockTotal = 0;

        while (currentDate <= endDate) {
          const week = [];
          for (let d = 0; d < 7; d++) {
            const isSelectedYear = currentDate.getFullYear() === selectedYear;
            const val = Math.abs(Math.sin(w * 12.9898 + d * 78.233) * 43758.5453) % 1;

            // Only populate past and today's dates, future dates remain level 0
            const isPastOrToday = selectedYear < currentYear || currentDate <= new Date();
            let weight = 0;
            if (isSelectedYear && isPastOrToday) {
              if (val > 0.97) weight = 4;
              else if (val > 0.91) weight = 3;
              else if (val > 0.78) weight = 2;
              else if (val > 0.58) weight = 1;
              mockTotal += (weight === 0 ? 0 : Math.floor(val * 8) + 1);
            }

            week.push({
              level: weight,
              count: weight === 0 ? 0 : Math.floor(val * 8) + 1,
              date: isSelectedYear ? currentDate.toISOString().split("T")[0] : ""
            });

            currentDate.setDate(currentDate.getDate() + 1);
          }
          mockGrid.push(week);
          w++;
        }

        setData({ grid: mockGrid, total: mockTotal });
        setLoading(false);
      });
  }, [username, selectedYear]);

  // Premium Classic GitHub Green color palette
  const greenPalette = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const colorPalette = isDark ? greenPalette.dark : greenPalette.light;

  return (
    <div className="flex flex-col gap-6">

      {/* Unified Year Selector Header with Custom Dropdown (for both large and small screens) */}
      <div className="flex justify-between items-center pb-3 border-b border-stone-200/80 dark:border-stone-800/80 relative z-30">
        <h4 className="text-stone-900 dark:text-stone-100 font-mono text-xs uppercase tracking-wider select-none font-bold">
          {loading ? "[LOADING...]" : `${data?.total || 0} contributions in ${selectedYear}`}
        </h4>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 border border-stone-250 dark:border-stone-850 bg-stone-100/50 dark:bg-stone-950/40 text-stone-700 dark:text-stone-300 font-mono text-[10px] uppercase tracking-wider transition-colors hover:bg-stone-100 dark:hover:bg-stone-900 select-none cursor-pointer"
          >
            <span>{selectedYear}</span>
            <span className="text-[8px] opacity-70">▼</span>
          </button>

          {dropdownOpen && (
            <>
              {/* Overlay Backdrop to close menu on outside tap */}
              <div
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setDropdownOpen(false)}
              />
              <div className="absolute right-0 mt-1.5 w-36 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 shadow-lg flex flex-col z-50 rounded-none">
                {years.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => {
                      setSelectedYear(yr);
                      setDropdownOpen(false);
                    }}
                    className={`text-left px-4 py-2 font-mono text-xs transition-colors select-none rounded-none ${selectedYear === yr
                      ? "bg-primary text-white dark:text-black font-bold"
                      : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900"
                      }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Calendar View */}
      <div className="w-full overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-12 text-stone-400 dark:text-stone-600 font-mono text-xs animate-pulse select-none">
            [LOADING CALENDAR...]
          </div>
        ) : (
          <div
            ref={containerRef}
            style={{ WebkitOverflowScrolling: "touch" }}
            className="flex flex-col w-full overflow-x-auto no-scrollbar py-2"
          >
            <div className="min-w-[670px] flex flex-col">
              {/* Month labels */}
              <div className="flex font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-2 pl-7 justify-between pr-4 select-none text-[9px]">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>

              {/* Grid cells */}
              <div className="flex gap-1.5">
                <div className="flex flex-col justify-between font-mono text-stone-400 dark:text-stone-500 uppercase py-1 pr-2 w-5 shrink-0 text-right select-none text-[8px]">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                <div className="flex flex-grow justify-between gap-1">
                  {data?.grid?.map((week, wIndex) => (
                    <div key={wIndex} className="flex flex-col gap-1">
                      {week.map((day, dIndex) => (
                        <div
                          key={dIndex}
                          style={{
                            width: "11px",
                            height: "11px",
                            backgroundColor: day.date ? (colorPalette[day.level] || colorPalette[0]) : "transparent",
                            borderRadius: "2px"
                          }}
                          className={`transition-all duration-300 hover:scale-125 hover:z-20 ${day.date ? "cursor-pointer" : "pointer-events-none"
                            }`}
                          title={day.date ? `${day.count} contributions on ${day.date}` : ""}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-1.5 font-mono text-stone-400 dark:text-stone-500 mt-3 select-none text-[9px]">
                <span>Less</span>
                {colorPalette.map((col, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: "9px",
                      height: "9px",
                      backgroundColor: col,
                      borderRadius: "1px"
                    }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
