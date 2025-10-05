// "use client";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableColumn,
//   TableHeader,
//   TableRow,
//   Spinner,
// } from "@heroui/react";
// import React, { useEffect, useState } from "react";

// const Transactions = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasReachedBottom, setHasReachedBottom] = useState(false);
//   const tableData = [
//     { id: "1", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "2", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "3", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "4", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "5", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "6", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "7", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "8", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "9", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "10", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "11", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "12", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "13", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "14", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "15", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "16", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "17", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "18", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "19", name: "Tony Reichert", role: "CEO", status: "Active" },
//     { id: "20", name: "Tony Reichert", role: "CEO", status: "Active" },
//   ];

//   useEffect(() => {
//     const findScrollContainer = () => {
//       // Wait for the table to render and find the scroll container
//       const table = document.querySelector(
//         '[aria-label="Example static collection table"]'
//       );
//       if (!table) return null;
//       // HeroUI usually creates a scrollable wrapper div
//       const scrollContainer =
//         table.querySelector(".overflow-auto") ||
//         table.querySelector('[style*="overflow"]') ||
//         table.closest(".overflow-auto");
//       return scrollContainer as HTMLElement;
//     };
//     const scrollTable = () => {
//       const container = findScrollContainer();
//       if (!container) {
//         console.log("Scroll container not found");
//         return;
//       }

//       // console.log("Scrolling...", {
//       //   scrollTop: container.scrollTop,
//       //   scrollHeight: container.scrollHeight,
//       //   clientHeight: container.clientHeight,
//       // });

//       if (
//         container.scrollTop >=
//         container.scrollHeight - container.clientHeight - 10
//       ) {
//         if (!hasReachedBottom) {
//           setIsLoading(true);
//           setHasReachedBottom(true);
//           setTimeout(() => {
//             setIsLoading(false);
//             container.scrollTo({ top: 0, behavior: "smooth" });
//             setHasReachedBottom(false);
//           }, 1000);
//         }
//       } else {
//         container.scrollBy({ top: 30, behavior: "smooth" });
//       }
//     };

//     // Start auto-scroll interval with a small delay to ensure DOM is ready
//     const scrollInterval = setInterval(scrollTable, 2000);

//     return () => clearInterval(scrollInterval);
//   }, [hasReachedBottom]);

//   return (
//     <div className="flex justify-center items-center mt-1 pt-0">
//       <Table
//         aria-label="Example static collection table"
//         className="max-h-[500px] w-full max-w-7xl mx-auto"
//         isHeaderSticky
//         classNames={{
//           base: "scrollbar-hide",
//         }}
//       >
//         <TableHeader>
//           <TableColumn className="bg-[#009688] text-white">NAME</TableColumn>
//           <TableColumn className="bg-[#009688] text-white">ROLE</TableColumn>
//           <TableColumn className="bg-[#009688] text-white">STATUS</TableColumn>
//         </TableHeader>
//         <TableBody items={tableData}>
//           {(item) => (
//             <TableRow key={item.id}>
//               <TableCell>{item.name}</TableCell>
//               <TableCell>{item.role}</TableCell>
//               <TableCell>{item.status}</TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//       {isLoading && (
//         <div className="absolute top-12 left-0 right-0 bottom-0 backdrop-blur-md bg-white/80 flex justify-center items-center z-10">
//           <div className="flex flex-col items-center space-y-4">
//             <Spinner color="primary" size="lg" />
//             <span className="text-gray-700 font-semibold">
//               Loading transactions...
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Transactions;
"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Spinner,
} from "@heroui/react";
import React, { useEffect, useState } from "react";

const Transactions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const tableData = [
    { id: "1", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "2", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "3", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "4", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "5", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "6", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "7", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "8", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "9", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "10", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "11", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "12", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "13", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "14", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "15", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "16", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "17", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "18", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "19", name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: "20", name: "Tony Reichert", role: "CEO", status: "Active" },
  ];

  useEffect(() => {
    const findScrollContainer = () => {
      const table = document.querySelector(
        '[aria-label="Example static collection table"]'
      );
      if (!table) return null;
      
      const scrollContainer =
        table.querySelector(".overflow-auto") ||
        table.querySelector('[style*="overflow"]') ||
        table.closest(".overflow-auto");
      return scrollContainer as HTMLElement;
    };

    const scrollTable = () => {
      const container = findScrollContainer();
      if (!container) {
        console.log("Scroll container not found");
        return;
      }

      if (
        container.scrollTop >=
        container.scrollHeight - container.clientHeight - 10
      ) {
        if (!hasReachedBottom) {
          setIsLoading(true);
          setHasReachedBottom(true);
          setTimeout(() => {
            setIsLoading(false);
            container.scrollTo({ top: 0, behavior: "smooth" });
            setHasReachedBottom(false);
          }, 11000);
        }
      } else {
        container.scrollBy({ top: 48, behavior: "smooth" });
      }
    };

    const scrollInterval = setInterval(scrollTable, 1000);
    return () => clearInterval(scrollInterval);
  }, [hasReachedBottom]);

  return (
    <div className="flex justify-center items-center mt-1 pt-0 relative">
      <Table
        aria-label="Example static collection table"
        className="max-h-[500px] w-full max-w-7xl mx-auto"
        isHeaderSticky
        // isStriped 
        color="primary"
        classNames={{
          base: "scrollbar-hide",
           tbody: "[&_tr]:h-12",
        }}
      >
        <TableHeader>
          <TableColumn className="bg-[#009688] text-white">NAME</TableColumn>
          <TableColumn className="bg-[#009688] text-white">ROLE</TableColumn>
          <TableColumn className="bg-[#009688] text-white">STATUS</TableColumn>
        </TableHeader>
        <TableBody items={tableData}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      
      {isLoading && (
        <div className="absolute top-14 left-14 right-14 bottom-0 backdrop-blur-md bg-white/80 flex justify-center items-center z-10">
          <div className="flex flex-col items-center space-y-4">
            <Spinner color="primary" size="lg" />
            <span className="text-gray-700 font-semibold">
              Loading transactions...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;