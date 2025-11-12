// // "use client";
// // import { transactionsType } from "@/app/types/type";
// // import { display } from "@/app/utils/action";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableColumn,
// //   TableHeader,
// //   TableRow,
// //   Spinner,
// //   Chip,
// //   Card,
// //   CardBody,
// //   Image,
// // } from "@heroui/react";
// // import React, { useEffect, useState, useRef } from "react";
// // import {
// //   CheckCircleIcon,
// //   ClockIcon,
// //   CreditCardIcon,
// // } from "@heroicons/react/24/outline";

// // const Transactions = () => {
// //   function maskAccountNumber(number: string, visibleDigits: number = 4) {
// //     if (!number) return "****";
// //     return (
// //       "*".repeat(number.length - visibleDigits) + number.slice(-visibleDigits)
// //     );
// //   }
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [hasReachedBottom, setHasReachedBottom] = useState(false);
// //   const [isRefreshing, setIsRefreshing] = useState(false);
// //   const [transaction, setTransaction] = useState<transactionsType[]>([]);
// //   const tableContainerRef = useRef<HTMLDivElement>(null);
// //   const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

// //   const displayTransaction = async () => {
// //     try {
// //       setIsRefreshing(true);
// //       const response_info = await display();
// //       if (response_info?.data.data && Array.isArray(response_info.data?.data)) {
// //         setTransaction(response_info.data?.data);
// //       }
// //       console.log("Summary", response_info?.data.currency);
// //     } catch (error) {
// //       console.log(error);
// //     } finally {
// //       setIsRefreshing(false);
// //     }
// //   };

// //   useEffect(() => {
// //     displayTransaction();
// //   }, []);

// //   useEffect(() => {
// //     if (transaction.length === 0) return;
// //     const startAutoPilotScroll = () => {
// //       if (scrollIntervalRef.current) {
// //         clearInterval(scrollIntervalRef.current);
// //       }
// //       scrollIntervalRef.current = setInterval(() => {
// //         const container = tableContainerRef.current;
// //         if (!container) return;
// //         // Continuous incremental scroll
// //         const scrollAmount = 1; // pixels per interval
// //         const maxScroll = container.scrollHeight - container.clientHeight;
// //         if (container.scrollTop >= maxScroll - 10) {
// //           // Reached bottom - STOP for 5 seconds first
// //           setHasReachedBottom(true);
// //           // Clear the scroll interval to stop scrolling
// //           if (scrollIntervalRef.current) {
// //             clearInterval(scrollIntervalRef.current);
// //           }
// //           // Wait 5 seconds at bottom (STOPPED), then show loading
// //           setTimeout(() => {
// //             setIsLoading(true);
// //             displayTransaction();
// //             // Wait 4 seconds with loading screen, then reset to top
// //             setTimeout(() => {
// //               setIsLoading(false);
// //               // Scroll to top immediately without animation
// //               container.scrollTop = 0;
// //               setHasReachedBottom(false);
// //               // Restart auto-pilot scrolling after reset
// //               setTimeout(() => {
// //                 startAutoPilotScroll();
// //               }, 100);
// //             }, 4000);
// //           }, 5000); // 5 seconds stopped at bottom
// //         } else {
// //           // Continue scrolling down smoothly
// //           container.scrollTop += scrollAmount;
// //         }
// //       }, 30); // Very fast interval for smooth continuous motion
// //     };
// //     // Start the auto-pilot scrolling
// //     startAutoPilotScroll();
// //     // Cleanup function
// //     return () => {
// //       if (scrollIntervalRef.current) {
// //         clearInterval(scrollIntervalRef.current);
// //       }
// //     };
// //   }, [transaction.length]);

// //   const getStatusInfo = (status_code: string) => {
// //     switch (status_code) {
// //       case "0000":
// //         return {
// //           color: "success" as const,
// //           label: "Success",
// //           icon: <CheckCircleIcon className="w-4 h-4" />,
// //         };
// //       default:
// //         return {
// //           color: "danger" as const,
// //           label: "Failed",
// //           icon: <ClockIcon className="w-4 h-4" />,
// //         };
// //     }
// //   };
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4">
// //       <div className="max-w-8xl mx-auto space-y-8">
// //         {/* Table Container */}
// //         <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
// //           <CardBody className="p-0">
// //             <div>{}</div>
// //             <div className="relative">
// //               {/* Table Container with ref for scrolling */}
// //               <div
// //                 ref={tableContainerRef}
// //                 className="max-h-[600px] overflow-auto"
// //               >
// //                 <Table
// //                   aria-label="Transactions table"
// //                   className="w-full"
// //                   isHeaderSticky
// //                   removeWrapper
// //                   isStriped
// //                   classNames={{
// //                     base: "min-w-full",
// //                     table: "min-w-full table-fixed",
// //                     thead:
// //                       "bg-gradient-to-r from-gray-50 to-blue-50 sticky top-0 z-20",
// //                     th: "bg-[#009688] text-white p-4 border-none h-16 text-sm font-semibold uppercase tracking-wide",
// //                     tbody: "bg-white divide-y divide-gray-100",
// //                     td: "px-6 py-5 whitespace-nowrap text-sm text-gray-900 border-b border-gray-100",
// //                     tr: "hover:bg-blue-50/50 transition-all duration-200 border-b border-gray-100 last:border-b-0",
// //                   }}
// //                   layout="fixed"
// //                 >
// //                   <TableHeader>
// //                     <TableColumn className="rounded-tl-2xl w-[20%] min-w-[200px] border-none">
// //                       TRANSACTION
// //                     </TableColumn>
// //                     <TableColumn className="w-[25%] min-w-[250px] border-none">
// //                       FROM ACCOUNT
// //                     </TableColumn>
// //                     <TableColumn className="w-[25%] min-w-[250px] border-none">
// //                       TO ACCOUNT
// //                     </TableColumn>
// //                     <TableColumn className="w-[15%] min-w-[120px] border-none">
// //                       AMOUNT
// //                     </TableColumn>
// //                     <TableColumn className="w-[10%] min-w-[100px] border-none">
// //                       FEE
// //                     </TableColumn>
// //                     <TableColumn className="rounded-tr-2xl w-[15%] min-w-[120px] border-none">
// //                       STATUS
// //                     </TableColumn>
// //                   </TableHeader>
// //                   <TableBody
// //                     items={transaction}
// //                     loadingContent={
// //                       <TableRow>
// //                         <TableCell colSpan={6} className="text-center py-12">
// //                           <div className="flex flex-col items-center justify-center">
// //                             <Spinner size="lg" className="mb-4" />
// //                             <p className="text-gray-600">
// //                               Loading transactions...
// //                             </p>
// //                           </div>
// //                         </TableCell>
// //                       </TableRow>
// //                     }
// //                     emptyContent={
// //                       <TableRow>
// //                         <TableCell colSpan={6} className="text-center py-12">
// //                           <div className="flex flex-col items-center justify-center">
// //                             <CreditCardIcon className="w-16 h-16 text-gray-300 mb-4" />
// //                             <p className="text-gray-600 text-lg">
// //                               No transactions found
// //                             </p>
// //                             <p className="text-gray-400 text-sm mt-2">
// //                               Transactions will appear here once processed
// //                             </p>
// //                           </div>
// //                         </TableCell>
// //                       </TableRow>
// //                     }
// //                   >
// //                     {(item) => {
// //                       const statusInfo = getStatusInfo(item.status_code);
// //                       return (
// //                         <TableRow
// //                           key={item.id}
// //                           className="group"
// //                           data-row="true"
// //                         >
// //                           {/* TRANSACTION Column */}
// //                           <TableCell className="w-[20%] min-w-[200px]">
// //                             <div className="flex items-center space-x-4">
// //                               <div className="w-10 h-10 bg-[#009688] from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
// //                                 <CreditCardIcon className="w-5 h-5 text-white" />
// //                               </div>
// //                               <div className="min-w-0 flex-1">
// //                                 <p className="font-semibold text-gray-900 truncate">
// //                                   {item.ref_no}
// //                                 </p>
// //                                 <p className="text-xs text-gray-500 mt-1">
// //                                   {item.payment_date
// //                                     ? new Date(item.payment_date).toLocaleString()
// //                                     : "N/A"}
// //                                 </p>
// //                               </div>
// //                             </div>
// //                           </TableCell>

// //                           {/* FROM ACCOUNT Column */}
// //                           <TableCell className="w-[25%] min-w-[250px]">
// //                             <div className="space-y-1">
// //                               <div className="flex items-center gap-2">
// //                                 <span className="font-medium text-gray-900 truncate">
// //                                   {item.from_bank}
// //                                 </span>
// //                                 <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded flex-shrink-0">
// //                                   {item.from_account_ccy}
// //                                 </span>
// //                               </div>
// //                               <p className="text-xs font-mono text-gray-600">
// //                                 {maskAccountNumber(item.from_account)}
// //                               </p>
// //                               <p className="text-sm text-gray-700 truncate">
// //                                 {item.from_account_name}
// //                               </p>
// //                             </div>
// //                           </TableCell>

// //                           {/* TO ACCOUNT Column */}
// //                           <TableCell className="w-[25%] min-w-[250px]">
// //                             <div className="space-y-1">
// //                               <div className="flex items-center gap-2">
// //                                 <span className="font-medium text-gray-900 truncate">
// //                                   {item.to_bank}
// //                                 </span>
// //                                 <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded flex-shrink-0">
// //                                   {item.to_account_ccy}
// //                                 </span>
// //                               </div>
// //                               <p className="text-xs font-mono text-gray-600">
// //                                 {maskAccountNumber(item.to_account)}
// //                               </p>
// //                               <p className="text-sm text-gray-700 truncate">
// //                                 {item.to_account_name}
// //                               </p>
// //                             </div>
// //                           </TableCell>

// //                           {/* AMOUNT Column */}
// //                           <TableCell className="w-[15%] min-w-[120px]">
// //                             <div>
// //                               <p className="font-bold text-sm text-green-600">
// //                                 {item.amount?.toLocaleString()} {item.from_account_ccy}
// //                               </p>
// //                             </div>
// //                           </TableCell>

// //                           {/* FEE Column */}
// //                           <TableCell className="w-[10%] min-w-[100px]">
// //                             <p className="font-semibold text-orange-600">
// //                               {item.fee?.toLocaleString()} {item.fee_amount_ccy}
// //                             </p>
// //                           </TableCell>

// //                           {/* STATUS Column */}
// //                           <TableCell className="w-[15%] min-w-[120px]">
// //                             <Chip
// //                               color={statusInfo.color}
// //                               variant="flat"
// //                               className="px-4 py-2 font-semibold w-full justify-center"
// //                               startContent={statusInfo.icon}
// //                             >
// //                               <span className="ml-1">{statusInfo.label}</span>
// //                             </Chip>
// //                           </TableCell>
// //                         </TableRow>
// //                       );
// //                     }}
// //                   </TableBody>
// //                 </Table>
// //               </div>

// //               {/* Enhanced Loading Overlay */}
// //               {isLoading && (
// //                 <div className="absolute inset-0 backdrop-blur-sm bg-white/90 flex justify-center items-center z-10 animate-fade-in">
// //                   <div className="text-center">
// //                     <div className="relative w-24 h-24 flex justify-center items-center mb-4">
// //                       <Spinner
// //                         size="lg"
// //                         variant="gradient"
// //                         color="default"
// //                         classNames={{
// //                           wrapper: "w-24 h-24",
// //                         }}
// //                       />
// //                       <div className="absolute inset-0 flex items-center justify-center">
// //                         <Image
// //                           src="/logobank.jpg"
// //                           alt="Loading"
// //                           width={70}
// //                           height={70}
// //                           className="rounded-full object-cover border-white shadow-lg"
// //                         />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Footer */}
// //             <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
// //               <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
// //                 <div className="flex items-center gap-4 text-gray-600">
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// //                     <span>Auto-scroll active</span>
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
// //                     <span>Real-time data</span>
// //                   </div>
// //                 </div>

// //                 <div className="text-gray-600">
// //                   Showing
// //                   <span className="font-semibold text-gray-800">
// //                     {transaction.length}
// //                   </span>
// //                   transactions
// //                 </div>
// //               </div>
// //             </div>
// //           </CardBody>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Transactions;
// "use client";
// import { transactionsType } from "@/app/types/type";
// import { display } from "@/app/utils/action";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableColumn,
//   TableHeader,
//   TableRow,
//   Spinner,
//   Chip,
//   Card,
//   CardBody,
//   Image,
// } from "@heroui/react";
// import React, { useEffect, useState, useRef } from "react";
// import {
//   CheckCircleIcon,
//   ClockIcon,
//   CreditCardIcon,
// } from "@heroicons/react/24/outline";

// const Transactions = () => {
//   function maskAccountNumber(number: string, visibleDigits: number = 4) {
//     if (!number) return "****";
//     return (
//       "*".repeat(number.length - visibleDigits) + number.slice(-visibleDigits)
//     );
//   }
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasReachedBottom, setHasReachedBottom] = useState(false);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [transaction, setTransaction] = useState<transactionsType[]>([]);
//   const tableContainerRef = useRef<HTMLDivElement>(null);
//   const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

//   const displayTransaction = async () => {
//     try {
//       setIsRefreshing(true);
//       const response_info = await display();
//       if (response_info?.data.data && Array.isArray(response_info.data?.data)) {
//         setTransaction(response_info.data?.data);
//       }
//       console.log("Summary", response_info?.data.currency);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     displayTransaction();
//   }, []);

//   useEffect(() => {
//     if (transaction.length === 0) return;
//     const startAutoPilotScroll = () => {
//       if (scrollIntervalRef.current) {
//         clearInterval(scrollIntervalRef.current);
//       }
//       scrollIntervalRef.current = setInterval(() => {
//         const container = tableContainerRef.current;
//         if (!container) return;
//         // Continuous incremental scroll
//         const scrollAmount = 1; // pixels per interval
//         const maxScroll = container.scrollHeight - container.clientHeight;
//         if (container.scrollTop >= maxScroll - 10) {
//           // Reached bottom - STOP for 5 seconds first
//           setHasReachedBottom(true);
//           // Clear the scroll interval to stop scrolling
//           if (scrollIntervalRef.current) {
//             clearInterval(scrollIntervalRef.current);
//           }
//           // Wait 5 seconds at bottom (STOPPED), then show loading
//           setTimeout(() => {
//             setIsLoading(true);
//             displayTransaction();
//             // Wait 4 seconds with loading screen, then reset to top
//             setTimeout(() => {
//               setIsLoading(false);
//               // Scroll to top immediately without animation
//               container.scrollTop = 0;
//               setHasReachedBottom(false);
//               // Restart auto-pilot scrolling after reset
//               setTimeout(() => {
//                 startAutoPilotScroll();
//               }, 100);
//             }, 4000);
//           }, 5000); // 5 seconds stopped at bottom
//         } else {
//           // Continue scrolling down smoothly
//           container.scrollTop += scrollAmount;
//         }
//       }, 30); // Very fast interval for smooth continuous motion
//     };
//     // Start the auto-pilot scrolling
//     startAutoPilotScroll();
//     // Cleanup function
//     return () => {
//       if (scrollIntervalRef.current) {
//         clearInterval(scrollIntervalRef.current);
//       }
//     };
//   }, [transaction.length]);

//   const getStatusInfo = (status_code: string) => {
//     switch (status_code) {
//       case "0000":
//         return {
//           color: "success" as const,
//           label: "Success",
//           icon: <CheckCircleIcon className="w-4 h-4" />,
//         };
//       default:
//         return {
//           color: "danger" as const,
//           label: "Failed",
//           icon: <ClockIcon className="w-4 h-4" />,
//         };
//     }
//   };
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6">
//       <div className="max-w-8xl mx-auto space-y-6 sm:space-y-8">
//         {/* Table Container */}
//         <Card className="border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
//           <CardBody className="p-0">
//             <div className="relative">
//               {/* Table Container with ref for scrolling - Improved responsive height */}
//               <div
//                 ref={tableContainerRef}
//                 className="h-[70vh] min-h-[500px] max-h-[900px] overflow-auto"
//               >
//                 <Table
//                   aria-label="Transactions table"
//                   className="w-full"
//                   isHeaderSticky
//                   removeWrapper
//                   classNames={{
//                     base: "min-w-full",
//                     table: "min-w-full table-fixed",
//                     thead:
//                       "bg-gradient-to-r from-gray-50 to-blue-50 sticky top-0 z-20 will-change-transform backface-hidden",
//                     th: "bg-[#009688] text-white p-3 sm:p-4 border-none h-14 sm:h-16 text-xs sm:text-sm font-semibold uppercase tracking-wide",
//                     tbody: "bg-white divide-y divide-gray-100",
//                     td: "px-4 sm:px-6 py-4 sm:py-5 whitespace-nowrap text-sm text-gray-900 border-b border-gray-100",
//                     tr: "hover:bg-blue-50/50 transition-all duration-200 border-b border-gray-100 last:border-b-0",
//                   }}
//                   layout="fixed"
//                 >
//                   <TableHeader>
//                     <TableColumn className="rounded-tl-xl sm:rounded-tl-2xl w-[20%] min-w-[150px] sm:min-w-[200px] border-none">
//                       TRANSACTION
//                     </TableColumn>
//                     <TableColumn className="w-[25%] min-w-[180px] sm:min-w-[250px] border-none">
//                       FROM ACCOUNT
//                     </TableColumn>
//                     <TableColumn className="w-[25%] min-w-[180px] sm:min-w-[250px] border-none">
//                       TO ACCOUNT
//                     </TableColumn>
//                     <TableColumn className="w-[15%] min-w-[100px] sm:min-w-[120px] border-none">
//                       AMOUNT
//                     </TableColumn>
//                     <TableColumn className="w-[10%] min-w-[80px] sm:min-w-[100px] border-none">
//                       FEE
//                     </TableColumn>
//                     <TableColumn className="rounded-tr-xl sm:rounded-tr-2xl w-[15%] min-w-[100px] sm:min-w-[120px] border-none">
//                       STATUS
//                     </TableColumn>
//                   </TableHeader>
//                   <TableBody
//                     items={transaction}
//                     loadingContent={
//                       <TableRow>
//                         <TableCell colSpan={6} className="text-center py-12">
//                           <div className="flex flex-col items-center justify-center">
//                             <Spinner size="lg" className="mb-4" />
//                             <p className="text-gray-600">
//                               Loading transactions...
//                             </p>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     }
//                     emptyContent={
//                       <TableRow>
//                         <TableCell colSpan={6} className="text-center py-12">
//                           <div className="flex flex-col items-center justify-center">
//                             <CreditCardIcon className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mb-4" />
//                             <p className="text-gray-600 text-base sm:text-lg">
//                               No transactions found
//                             </p>
//                             <p className="text-gray-400 text-xs sm:text-sm mt-2">
//                               Transactions will appear here once processed
//                             </p>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     }
//                   >
//                     {(item) => {
//                       const statusInfo = getStatusInfo(item.status_code);
//                       return (
//                         <TableRow
//                           key={item.id}
//                           className="group"
//                           data-row="true"
//                         >
//                           {/* TRANSACTION Column */}
//                           <TableCell className="w-[20%] min-w-[150px] sm:min-w-[200px]">
//                             <div className="flex items-center space-x-3 sm:space-x-4">
//                               <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#009688] from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                                 <CreditCardIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//                               </div>
//                               <div className="min-w-0 flex-1">
//                                 <p className="font-semibold text-gray-900 truncate text-xs sm:text-sm">
//                                   {item.ref_no}
//                                 </p>
//                                 <p className="text-xs text-gray-500 mt-1">
//                                   {item.payment_date
//                                     ? new Date(
//                                         item.payment_date
//                                       ).toLocaleString()
//                                     : "N/A"}
//                                 </p>
//                               </div>
//                             </div>
//                           </TableCell>

//                           {/* FROM ACCOUNT Column */}
//                           <TableCell className="w-[25%] min-w-[180px] sm:min-w-[250px]">
//                             <div className="space-y-1">
//                               <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
//                                 <span className="font-medium text-gray-900 truncate text-xs sm:text-sm">
//                                   {item.from_bank}
//                                 </span>
//                                 <span className="text-xs text-gray-500 bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex-shrink-0">
//                                   {item.from_account_ccy}
//                                 </span>
//                               </div>
//                               <p className="text-xs font-mono text-gray-600">
//                                 {maskAccountNumber(item.from_account)}
//                               </p>
//                               <p className="text-xs sm:text-sm text-gray-700 truncate">
//                                 {item.from_account_name}
//                               </p>
//                             </div>
//                           </TableCell>

//                           {/* TO ACCOUNT Column */}
//                           <TableCell className="w-[25%] min-w-[180px] sm:min-w-[250px]">
//                             <div className="space-y-1">
//                               <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
//                                 <span className="font-medium text-gray-900 truncate text-xs sm:text-sm">
//                                   {item.to_bank}
//                                 </span>
//                                 <span className="text-xs text-gray-500 bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex-shrink-0">
//                                   {item.to_account_ccy}
//                                 </span>
//                               </div>
//                               <p className="text-xs font-mono text-gray-600">
//                                 {maskAccountNumber(item.to_account)}
//                               </p>
//                               <p className="text-xs sm:text-sm text-gray-700 truncate">
//                                 {item.to_account_name}
//                               </p>
//                             </div>
//                           </TableCell>

//                           {/* AMOUNT Column */}
//                           <TableCell className="w-[15%] min-w-[100px] sm:min-w-[120px]">
//                             <div>
//                               <p className="font-bold text-xs sm:text-sm text-green-600">
//                                 {item.amount?.toLocaleString()}{" "}
//                                 {item.from_account_ccy}
//                               </p>
//                             </div>
//                           </TableCell>

//                           {/* FEE Column */}
//                           <TableCell className="w-[10%] min-w-[80px] sm:min-w-[100px]">
//                             <p className="font-semibold text-xs sm:text-sm text-orange-600">
//                               {item.fee?.toLocaleString()} {item.fee_amount_ccy}
//                             </p>
//                           </TableCell>

//                           {/* STATUS Column */}
//                           <TableCell className="w-[15%] min-w-[100px] sm:min-w-[120px]">
//                             <Chip
//                               color={statusInfo.color}
//                               variant="flat"
//                               className="px-2 sm:px-4 py-1.5 sm:py-2 font-semibold w-full justify-center text-xs sm:text-sm"
//                               startContent={statusInfo.icon}
//                             >
//                               <span className="ml-1">{statusInfo.label}</span>
//                             </Chip>
//                           </TableCell>
//                         </TableRow>
//                       );
//                     }}
//                   </TableBody>
//                 </Table>
//               </div>

//               {/* Enhanced Loading Overlay */}
//               {isLoading && (
//                 <div className="absolute inset-0 backdrop-blur-sm bg-white/90 flex justify-center items-center z-10 animate-fade-in">
//                   <div className="text-center">
//                     <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center mb-4">
//                       <Spinner
//                         size="lg"
//                         variant="gradient"
//                         color="default"
//                         classNames={{
//                           wrapper: "w-20 h-20 sm:w-24 sm:h-24",
//                         }}
//                       />
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Image
//                           src="/logobank.jpg"
//                           alt="Loading"
//                           width={60}
//                           height={60}
//                           className="rounded-full object-cover border-white shadow-lg"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Footer */}
//             <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
//               <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
//                 <div className="text-gray-600 text-center sm:text-left">
//                   Showing
//                   <span className="font-semibold text-gray-800 mx-1">
//                     {transaction.length}
//                   </span>
//                   transactions
//                 </div>
//               </div>
//             </div>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Transactions;

"use client";
import { Tabs, Tab, Card, CardBody, Chip } from "@heroui/react";
import { useState, useEffect, useRef } from "react";
import { transactionsType } from "../../types/type";
import {
  displayRTGS_ILPFT,
  displayIOTFT_IOWFT,
  displayIEDFT_IROFT_IWTFT_ITAES,
  displayIFLFX,
  displayILSKB_ILSKS,
  displayIMMON_IUMON,
  displayIPELC_IPETP_IPEUT_IPOLC,
} from "../../utils/action";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function App() {
  const tabs = [
    "IRTGS-ILPFT",
    "IOTFT-IOWFT",
    "IEDFT-IROFT-IWTFT-ITAES",
    "IFLFX",
    "ILSKB-ILSKS",
    "IMMON-IUMON",
    "IPELC-IPETP-IPEUT-IPOLC",
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // State for each transaction type
  const [RTGS_ILPFT, setRTGS_ILPFT] = useState<transactionsType[] | null>(null);
  const [IOTFT_IOWFT_Data, setIOTFT_IOWFT_Data] = useState<
    transactionsType[] | null
  >(null);
  const [IEDFT_IROFT_IWTFT_ITAES_Data, setIEDFT_IROFT_IWTFT_ITAES_Data] =
    useState<transactionsType[] | null>(null);
  const [IFLFX_Data, setIFLFX_Data] = useState<transactionsType[] | null>(null);
  const [ILSKB_ILSKS_Data, setILSKB_ILSKS_Data] = useState<
    transactionsType[] | null
  >(null);
  const [IMMON_IUMON_Data, setIMMON_IUMON_Data] = useState<
    transactionsType[] | null
  >(null);
  const [IPELC_IPETP_IPEUT_IPOLC_Data, setIPELC_IPETP_IPEUT_IPOLC_Data] =
    useState<transactionsType[] | null>(null);

  // Loading states for each tab
  const [isLoading, setIsLoading] = useState({
    "IRTGS-ILPFT": true,
    "IOTFT-IOWFT": false,
    "IEDFT-IROFT-IWTFT-ITAES": false,
    IFLFX: false,
    "ILSKB-ILSKS": false,
    "IMMON-IUMON": false,
    "IPELC-IPETP-IPEUT-IPOLC": false,
  });

  const tableBodyRef = useRef<HTMLDivElement>(null);
  const scrollCompleteRef = useRef(false);

  // Data fetching functions for each transaction type
  const fetchRTGS_ILPFT = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, "IRTGS-ILPFT": true }));
      const result = await displayRTGS_ILPFT();
      if (result && Array.isArray(result) && result.length > 0) {
        setRTGS_ILPFT(result);
      } else {
        setRTGS_ILPFT([]);
      }
    } catch (error) {
      console.log(error);
      setRTGS_ILPFT([]);
    } finally {
      setIsLoading((prev) => ({ ...prev, "IRTGS-ILPFT": false }));
    }
  };

  const fetchIOTFT_IOWFT = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, "IOTFT-IOWFT": true }));
      const result = await displayIOTFT_IOWFT();
      if (result && Array.isArray(result) && result.length > 0) {
        setIOTFT_IOWFT_Data(result);
      } else {
        setIOTFT_IOWFT_Data([]);
      }
    } catch (error) {
      console.log(error);
      setIOTFT_IOWFT_Data([]);
    } finally {
      setIsLoading((prev) => ({ ...prev, "IOTFT-IOWFT": false }));
    }
  };

  const fetchIEDFT_IROFT_IWTFT_ITAES = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, "IEDFT-IROFT-IWTFT-ITAES": true }));
      const result = await displayIEDFT_IROFT_IWTFT_ITAES();
      if (result && Array.isArray(result) && result.length > 0) {
        setIEDFT_IROFT_IWTFT_ITAES_Data(result);
      } else {
        setIEDFT_IROFT_IWTFT_ITAES_Data([]);
      }
    } catch (error) {
      console.log(error);
      setIEDFT_IROFT_IWTFT_ITAES_Data([]);
    } finally {
      setIsLoading((prev) => ({ ...prev, "IEDFT-IROFT-IWTFT-ITAES": false }));
    }
  };

  const fetchIFLFX = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, IFLFX: true }));
      const result = await displayIFLFX();
      if (result && Array.isArray(result) && result.length > 0) {
        setIFLFX_Data(result);
      } else {
        setIFLFX_Data([]);
      }
    } catch (error) {
      console.log(error);
      setIFLFX_Data([]);
    } finally {
      setIsLoading((prev) => ({ ...prev, IFLFX: false }));
    }
  };

  const fetchILSKB_ILSKS = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, "ILSKB-ILSKS": true }));
      const result = await displayILSKB_ILSKS();
      if (result && Array.isArray(result) && result.length > 0) {
        setILSKB_ILSKS_Data(result);
      } else {
        setILSKB_ILSKS_Data([]);
      }
    } catch (error) {
      console.log(error);
      setILSKB_ILSKS_Data([]);
    } finally {
      setIsLoading((prev) => ({ ...prev, "ILSKB-ILSKS": false }));
    }
  };

  const fetchIMMON_IUMON = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, "IMMON-IUMON": true }));
      const result = await displayIMMON_IUMON();
      if (result && Array.isArray(result) && result.length > 0) {
        setIMMON_IUMON_Data(result);
      } else {
        setIMMON_IUMON_Data([]);
      }
    } catch (error) {
      console.log(error);
      setIMMON_IUMON_Data([]);
    } finally {
      setIsLoading((prev) => ({ ...prev, "IMMON-IUMON": false }));
    }
  };

  const fetchIPELC_IPETP_IPEUT_IPOLC = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, "IPELC-IPETP-IPEUT-IPOLC": true }));
      const result = await displayIPELC_IPETP_IPEUT_IPOLC();
      if (result && Array.isArray(result) && result.length > 0) {
        setIPELC_IPETP_IPEUT_IPOLC_Data(result);
      } else {
        setIPELC_IPETP_IPEUT_IPOLC_Data([]);
      }
    } catch (error) {
      console.log(error);
      setIPELC_IPETP_IPEUT_IPOLC_Data([]);
    } finally {
      setIsLoading((prev) => ({ ...prev, "IPELC-IPETP-IPEUT-IPOLC": false }));
    }
  };

  // Fetch initial data for the first tab
  useEffect(() => {
    fetchRTGS_ILPFT();
  }, []);

  // Auto-scroll effect with completion detection
  useEffect(() => {
    const container = tableBodyRef.current;
    let currentData = null;

    // Get current tab data
    switch (selectedTab) {
      case "IRTGS-ILPFT":
        currentData = RTGS_ILPFT;
        console.log("rtgs", RTGS_ILPFT);
        break;
      case "IOTFT-IOWFT":
        currentData = IOTFT_IOWFT_Data;
        console.log("iotf", IOTFT_IOWFT_Data);
        break;
      case "IEDFT-IROFT-IWTFT-ITAES":
        currentData = IEDFT_IROFT_IWTFT_ITAES_Data;
        console.log("iedft", IEDFT_IROFT_IWTFT_ITAES_Data);
        break;
      case "IFLFX":
        currentData = IFLFX_Data;
        console.log("iflfx", IFLFX_Data);
        break;
      case "ILSKB-ILSKS":
        currentData = ILSKB_ILSKS_Data;
        console.log("ILSKB", ILSKB_ILSKS_Data);
        break;
      case "IMMON-IUMON":
        currentData = IMMON_IUMON_Data;
        console.log("IMMON", IMMON_IUMON_Data);
        break;
      case "IPELC-IPETP-IPEUT-IPOLC":
        currentData = IPELC_IPETP_IPEUT_IPOLC_Data;
        console.log("IPELC", IPELC_IPETP_IPEUT_IPOLC_Data);
        break;
    }

    if (!container || !currentData || currentData.length === 0) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.4;
    let isPaused = false;
    scrollCompleteRef.current = false;

    const scrollTable = () => {
      if (!container) return;

      if (!isPaused) {
        scrollPosition += scrollSpeed;

        // Check if we've reached the bottom (with a small buffer)
        const isAtBottom =
          scrollPosition >= container.scrollHeight - container.clientHeight - 5;

        if (isAtBottom) {
          // Mark scrolling as complete for this tab
          scrollCompleteRef.current = true;
          scrollPosition = container.scrollHeight - container.clientHeight;
        } else {
          scrollCompleteRef.current = false;
        }

        container.scrollTop = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(scrollTable);
    };

    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => (isPaused = false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Reset scroll position when tab changes
    container.scrollTop = 0;
    scrollPosition = 0;
    scrollCompleteRef.current = false;

    animationFrameId = requestAnimationFrame(scrollTable);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    selectedTab,
    RTGS_ILPFT,
    IOTFT_IOWFT_Data,
    IEDFT_IROFT_IWTFT_ITAES_Data,
    IFLFX_Data,
    ILSKB_ILSKS_Data,
    IMMON_IUMON_Data,
    IPELC_IPETP_IPEUT_IPOLC_Data,
  ]);

  // Smart tab switching that waits for scroll completion
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setSelectedTab((current) => {
        let currentData = null;

        // Get current tab data
        switch (current) {
          case "IRTGS-ILPFT":
            currentData = RTGS_ILPFT;
            break;
          case "IOTFT-IOWFT":
            currentData = IOTFT_IOWFT_Data;
            break;
          case "IEDFT-IROFT-IWTFT-ITAES":
            currentData = IEDFT_IROFT_IWTFT_ITAES_Data;
            break;
          case "IFLFX":
            currentData = IFLFX_Data;
            break;
          case "ILSKB-ILSKS":
            currentData = ILSKB_ILSKS_Data;
            break;
          case "IMMON-IUMON":
            currentData = IMMON_IUMON_Data;
            break;
          case "IPELC-IPETP-IPEUT-IPOLC":
            currentData = IPELC_IPETP_IPEUT_IPOLC_Data;
            break;
        }

        // Only switch to next tab if scrolling is complete OR if there's no data
        const shouldSwitch =
          scrollCompleteRef.current || !currentData || currentData.length === 0;

        if (shouldSwitch) {
          const currentIndex = tabs.findIndex((tab) => tab === current);
          const nextIndex = (currentIndex + 1) % tabs.length;
          const nextTab = tabs[nextIndex];

          // Fetch data for the next tab if it hasn't been loaded yet
          fetchTabData(nextTab);

          return nextTab;
        }

        // If scrolling isn't complete, stay on current tab
        return current;
      });
    }, 10000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    tabs,
    RTGS_ILPFT,
    IOTFT_IOWFT_Data,
    IEDFT_IROFT_IWTFT_ITAES_Data,
    IFLFX_Data,
    ILSKB_ILSKS_Data,
    IMMON_IUMON_Data,
    IPELC_IPETP_IPEUT_IPOLC_Data,
  ]);

  // Function to fetch data for specific tab
  const fetchTabData = (tab: string) => {
    switch (tab) {
      case "IRTGS-ILPFT":
        if (!RTGS_ILPFT) fetchRTGS_ILPFT();
        break;
      case "IOTFT-IOWFT":
        if (!IOTFT_IOWFT_Data) fetchIOTFT_IOWFT();
        break;
      case "IEDFT-IROFT-IWTFT-ITAES":
        if (!IEDFT_IROFT_IWTFT_ITAES_Data) fetchIEDFT_IROFT_IWTFT_ITAES();
        break;
      case "IFLFX":
        if (!IFLFX_Data) fetchIFLFX();
        break;
      case "ILSKB-ILSKS":
        if (!ILSKB_ILSKS_Data) fetchILSKB_ILSKS();
        break;
      case "IMMON-IUMON":
        if (!IMMON_IUMON_Data) fetchIMMON_IUMON();
        break;
      case "IPELC-IPETP-IPEUT-IPOLC":
        if (!IPELC_IPETP_IPEUT_IPOLC_Data) fetchIPELC_IPETP_IPEUT_IPOLC();
        break;
    }
  };
  const handleSelectionChange = (key: React.Key) => {
    const tabKey = key as string;
    setSelectedTab(tabKey);
    fetchTabData(tabKey);
    scrollCompleteRef.current = false;
  };

  const getStatusInfo = (status_code: string) => {
    switch (status_code) {
      case "0000":
        return {
          color: "success" as const,
          label: "ສຳເລັດ",
          icon: <CheckCircleIcon className="w-4 h-4" />,
        };
      case "E406":
        return {
          color: "danger" as const,
          label: "ລະບົບປິດ",
          icon: <ClockIcon className="w-4 h-4"/>,
        };
      case "TLC1":
        return {
          color: "danger" as const,
          label: "ເບີໂທບໍ່ຖຶກຕ້ອງ",
          icon: <ClockIcon className="w-4 h-4" />,
        };
      case "E405":
        return {
          color: "danger" as const,
          label: "Method Not Allowed",
          icon: <ClockIcon className="w-4 h-4" />,
        };
      default:
        return {
          color: "danger" as const,
          label: "ບໍ່ສຳເລັດ",
          icon: <ClockIcon className="w-4 h-4" />,
        };
    }
  };

  const extractDisplayText = (fncName: string) => {
    if (!fncName) return "N/A";
    const laoRegex = /[\u0E80-\u0EFF]+/g;
    const laoMatches = fncName.match(laoRegex);

    if (laoMatches && laoMatches.length > 0) {
      return laoMatches.join(" ");
    }
    return fncName;
  };
  const TransactionTable = ({
    data,
    isLoading,
    currentTab,
  }: {
    data: transactionsType[] | null;
    isLoading: boolean;
    currentTab: string;
  }) => (
    <Card className="pb-6">
      <CardBody className="p-6">
        <div className="h-[600px] relative rounded-lg border border-gray-200 bg-white shadow-inner overflow-hidden w-full">
          {/* Fixed Header */}
          <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
            <div className="grid grid-cols-6 w-full">
              {[
                "ເລກອ້າງອິງ",
                "ຈາກບັນຊີ",
                "ຫາບັນຊີ",
                "FNC NAME",
                "ຈຳນວນເງິນ",
                "ສະຖານະ",
              ].map((header) => (
                <div
                  key={header}
                  className="bg-[#009688] to-teal-500 text-white font-bold text-sm uppercase py-3 px-4 border-r border-teal-600 leading-tight"
                >
                  {header}
                </div>
              ))}
            </div>
          </div>

          {/* Scrollable Body */}
          <div
            ref={tableBodyRef}
            className="h-[calc(100%-68px)] overflow-hidden relative w-full"
          >
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-500">Loading...</div>
              </div>
            ) : data && data.length > 0 ? (
              <div className="space-y-0 w-full">
                {data.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="grid grid-cols-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 w-full"
                  >
                    {/* REF_NO Column */}
                    <div className="py-4 px-6 text-gray-700 text-base border-r border-gray-100 font-medium flex items-center min-h-[60px]">
                      <span className="leading-relaxed">
                        <p className="font-semibold text-gray-800 text-sm">
                          {transaction.ref_no || "null"}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {transaction?.payment_date}
                        </p>
                      </span>
                    </div>

                    {/* FROM ACCOUNT Column */}
                    <div className="py-4 px-6 text-gray-800 text-base border-r border-gray-100 min-h-[60px]">
                      <span className="leading-relaxed">
                        <p className="font-medium">
                          {transaction.from_bank} (
                          {transaction?.from_account_ccy})
                        </p>
                        <p>{transaction.from_account}</p>
                      </span>
                    </div>

                    {/* TO ACCOUNT Column */}
                    <div className="py-4 px-6 text-gray-800 text-base border-r border-gray-100 min-h-[60px]">
                      <span className="leading-relaxed">
                        <p className="font-medium">
                          {transaction?.to_bank} ({transaction?.to_account_ccy})
                        </p>
                        <p>{transaction.to_account}</p>
                      </span>
                    </div>

                    {/* FNC NAME Column - NEW COLUMN ADDED */}
                    <div className="py-4 px-6 text-gray-700 text-base border-r border-gray-100 font-medium flex items-center min-h-[60px]">
                      <span className="leading-relaxed">
                        <p className="font-medium text-gray-800 text-sm">
                          {extractDisplayText(transaction.fnc_name) || "N/A"}
                        </p>
                      </span>
                    </div>

                    {/* AMOUNT Column */}
                    <div className="py-4 px-6 text-base text-gray-600 border-r border-gray-100 flex items-center font-medium min-h-[60px]">
                      <span className="leading-relaxed">
                        {transaction.amount?.toLocaleString()}{" "}
                        {transaction.fee_amount_ccy}
                      </span>
                    </div>

                    {/* STATUS Column */}
                    <div className="py-4 px-6 text-base flex items-center min-h-[60px]">
                      <Chip
                        color={getStatusInfo(transaction.status_code).color}
                        variant="flat"
                        className="px-2 sm:px-4 py-1.5 sm:py-2 font-semibold w-full justify-center text-xs sm:text-sm"
                        startContent={
                          getStatusInfo(transaction.status_code).icon
                        }
                      >
                        <span className="ml-1">
                          {getStatusInfo(transaction.status_code).label}
                        </span>
                      </Chip>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-500">No transactions found</div>
              </div>
            )}

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </CardBody>
    </Card>
  );

  // Get current tab data and loading state
  const getCurrentTabData = () => {
    switch (selectedTab) {
      case "IRTGS-ILPFT":
        return { data: RTGS_ILPFT, loading: isLoading["IRTGS-ILPFT"] };
      case "IOTFT-IOWFT":
        return { data: IOTFT_IOWFT_Data, loading: isLoading["IOTFT-IOWFT"] };
      case "IEDFT-IROFT-IWTFT-ITAES":
        return {
          data: IEDFT_IROFT_IWTFT_ITAES_Data,
          loading: isLoading["IEDFT-IROFT-IWTFT-ITAES"],
        };
      case "IFLFX":
        return { data: IFLFX_Data, loading: isLoading["IFLFX"] };
      case "ILSKB-ILSKS":
        return { data: ILSKB_ILSKS_Data, loading: isLoading["ILSKB-ILSKS"] };
      case "IMMON-IUMON":
        return { data: IMMON_IUMON_Data, loading: isLoading["IMMON-IUMON"] };
      case "IPELC-IPETP-IPEUT-IPOLC":
        return {
          data: IPELC_IPETP_IPEUT_IPOLC_Data,
          loading: isLoading["IPELC-IPETP-IPEUT-IPOLC"],
        };
      default:
        return { data: null, loading: true };
    }
  };

  const currentTabData = getCurrentTabData();

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selectedTab}
        onSelectionChange={handleSelectionChange}
        fullWidth
        className="mt-1"
        classNames={{
          tabList: "gap-4",
          cursor: "bg-[#009688] text-white",
          tabContent:
            "group-data-[selected=true]:text-white text-sm font-bold text-gray-600",
        }}
      >
        <Tab key="IRTGS-ILPFT" title="ໂອນຂ້າມທະນາຄານ">
          <TransactionTable
            data={currentTabData.data}
            isLoading={currentTabData.loading}
            currentTab={selectedTab}
          />
        </Tab>

        <Tab key="IOTFT-IOWFT" title="ໂອນບັນຊີພາຍໃນ">
          <TransactionTable
            data={currentTabData.data}
            isLoading={currentTabData.loading}
            currentTab={selectedTab}
          />
        </Tab>

        <Tab key="IEDFT-IROFT-IWTFT-ITAES" title="ຊຳລະໃບບິນ">
          <TransactionTable
            data={currentTabData.data}
            isLoading={currentTabData.loading}
            currentTab={selectedTab}
          />
        </Tab>

        <Tab key="IFLFX" title="ຕະຫຼາດແລກປ່ຽນ">
          <TransactionTable
            data={currentTabData.data}
            isLoading={currentTabData.loading}
            currentTab={selectedTab}
          />
        </Tab>

        <Tab key="ILSKB-ILSKS" title="ສິນເຊື່ອ">
          <TransactionTable
            data={currentTabData.data}
            isLoading={currentTabData.loading}
            currentTab={selectedTab}
          />
        </Tab>

        <Tab key="IMMON-IUMON" title="ເຕີມເງິນເຂົ້າກະເປົາ">
          <TransactionTable
            data={currentTabData.data}
            isLoading={currentTabData.loading}
            currentTab={selectedTab}
          />
        </Tab>

        <Tab key="IPELC-IPETP-IPEUT-IPOLC" title="ເຕີມມູນຄ່າໂທ">
          <TransactionTable
            data={currentTabData.data}
            isLoading={currentTabData.loading}
            currentTab={selectedTab}
          />
        </Tab>
      </Tabs>
    </div>
  );
}
