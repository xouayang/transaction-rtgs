"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Spinner,
  Image,
  Chip,
} from "@heroui/react";
import React, { useEffect, useState, useRef } from "react";

const Transactions = () => {
  function maskAccountNumber(number: string, visibleDigits: number = 4) {
    return (
      "*".repeat(number.length - visibleDigits) + number.slice(-visibleDigits)
    );
  }

  const [isLoading, setIsLoading] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const currentRowRef = useRef(0);

  const tableData = [
    {
      id: "1",
      ref: "A1747292811YSBL",
      from_acc: "01000200000320",
      from_ccy: "THB",
      from_acc_name: "ຮ້ານ ອາຫານ ບັນເທີງຮຸ່ງໂລດ ສ່ວນບຸກຄົນ",
      from_bank: "APB",
      to_acc: "01000200000318",
      to_ccy: "THB",
      to_acc_name: "ms souksavanh",
      to_bank: "COEBLALA",
      amount: 23000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 60,
      status: "success",
      timestamp: "2024-01-15 14:30:25"
    },
    {
      id: "2",
      ref: "A1747292822XSBL",
      from_acc: "01000200000321",
      from_ccy: "THB",
      from_acc_name: "ບໍລິສັດ ຄອມເມີຊຳ ຈຳກັດ",
      from_bank: "APB",
      to_acc: "01000200000319",
      to_ccy: "THB",
      to_acc_name: "mr johnson",
      to_bank: "COEBLALA",
      amount: 45000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 75,
      status: "success",
      timestamp: "2024-01-15 13:15:42"
    },
    {
      id: "3",
      ref: "A1747292833ZSBL",
      from_acc: "01000200000322",
      from_ccy: "THB",
      from_acc_name: "ຮ້ານ ເຄື່ອງແພງ ສຳເລັດ",
      from_bank: "APB",
      to_acc: "01000200000320",
      to_ccy: "THB",
      to_acc_name: "mrs vilayphone",
      to_bank: "COEBLALA",
      amount: 120000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 150,
      status: "success",
      timestamp: "2024-01-15 11:45:18"
    },
    {
      id: "4",
      ref: "A1747292844WSBL",
      from_acc: "01000200000323",
      from_ccy: "THB",
      from_acc_name: "ບໍລິສັດ ການຄັງ ແລະ ການເງິນ",
      from_bank: "APB",
      to_acc: "01000200000321",
      to_ccy: "THB",
      to_acc_name: "mr sengsavanh",
      to_bank: "COEBLALA",
      amount: 78000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 95,
      status: "success",
      timestamp: "2024-01-15 10:20:33"
    },
    {
      id: "5",
      ref: "A1747292855VSBL",
      from_acc: "01000200000324",
      from_ccy: "THB",
      from_acc_name: "ຮ້ານ ເຄື່ອງດົມຄົວ ສະຫວັນ",
      from_bank: "APB",
      to_acc: "01000200000322",
      to_ccy: "THB",
      to_acc_name: "ms khamla",
      to_bank: "COEBLALA",
      amount: 34000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 60,
      status: "success",
      timestamp: "2024-01-15 09:15:27"
    },
    {
      id: "6",
      ref: "A1747292866USBL",
      from_acc: "01000200000325",
      from_ccy: "THB",
      from_acc_name: "ບໍລິສັດ ອຸດສາຫະກຳ ໃໝ່",
      from_bank: "APB",
      to_acc: "01000200000323",
      to_ccy: "THB",
      to_acc_name: "mr bouavanh",
      to_bank: "COEBLALA",
      amount: 156000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 180,
      status: "success",
      timestamp: "2024-01-14 16:45:12"
    },
    {
      id: "7",
      ref: "A1747292877TSBL",
      from_acc: "01000200000326",
      from_ccy: "THB",
      from_acc_name: "ຮ້ານ ເຄື່ອງໃຊ້ໄຟຟ້າ ໄຊຍະລາດ",
      from_bank: "APB",
      to_acc: "01000200000324",
      to_ccy: "THB",
      to_acc_name: "ms anousone",
      to_bank: "COEBLALA",
      amount: 89000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 110,
      status: "success",
      timestamp: "2024-01-14 15:30:45"
    },
    {
      id: "8",
      ref: "A1747292888RSBL",
      from_acc: "01000200000327",
      from_ccy: "THB",
      from_acc_name: "ບໍລິສັດ ການສ້າງ ແລະ ການພັດທະນາ",
      from_bank: "APB",
      to_acc: "01000200000325",
      to_ccy: "THB",
      to_acc_name: "mr vanhnasy",
      to_bank: "COEBLALA",
      amount: 234000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 250,
      status: "success",
      timestamp: "2024-01-14 14:20:18"
    },
    {
      id: "9",
      ref: "A1747292899QSBL",
      from_acc: "01000200000328",
      from_ccy: "THB",
      from_acc_name: "ຮ້ານ ເຄື່ອງນຸ່ງຫົ່ມ ມະນີວັນ",
      from_bank: "APB",
      to_acc: "01000200000326",
      to_ccy: "THB",
      to_acc_name: "ms souliya",
      to_bank: "COEBLALA",
      amount: 45000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 75,
      status: "success",
      timestamp: "2024-01-14 13:10:52"
    },
    {
      id: "10",
      ref: "A1747292900PSBL",
      from_acc: "01000200000329",
      from_ccy: "THB",
      from_acc_name: "ບໍລິສັດ ຂົນສົ່ງ ໄວໆ",
      from_bank: "APB",
      to_acc: "01000200000327",
      to_ccy: "THB",
      to_acc_name: "mr khamphong",
      to_bank: "COEBLALA",
      amount: 67000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 85,
      status: "success",
      timestamp: "2024-01-14 11:45:29"
    },
    {
      id: "11",
      ref: "A1747292911OSBL",
      from_acc: "01000200000330",
      from_ccy: "THB",
      from_acc_name: "ຮ້ານ ອາຫານ ສະຫວັນນະໂລກ",
      from_bank: "APB",
      to_acc: "01000200000328",
      to_ccy: "THB",
      to_acc_name: "ms ketsana",
      to_bank: "COEBLALA",
      amount: 28000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 60,
      status: "success",
      timestamp: "2024-01-14 10:30:14"
    },
    {
      id: "12",
      ref: "A1747292922NSBL",
      from_acc: "01000200000331",
      from_ccy: "THB",
      from_acc_name: "ບໍລິສັດ ເຕັກໂນໂລຊີ ສະຫຍາມ",
      from_bank: "APB",
      to_acc: "01000200000329",
      to_ccy: "THB",
      to_acc_name: "mr sitthichai",
      to_bank: "COEBLALA",
      amount: 189000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 200,
      status: "success",
      timestamp: "2024-01-14 09:15:37"
    },
    {
      id: "13",
      ref: "A1747292933MSBL",
      from_acc: "01000200000332",
      from_ccy: "THB",
      from_acc_name: "ຮ້ານ ເຄື່ອງສຳອາງ ວິລະຊົນ",
      from_bank: "APB",
      to_acc: "01000200000330",
      to_ccy: "THB",
      to_acc_name: "ms malivanh",
      to_bank: "COEBLALA",
      amount: 56000,
      amount_ccy: "THB",
      fee_ccy: "THB",
      fee: 80,
      status: "success",
      timestamp: "2024-01-13 17:20:45"
    },
  ];

  useEffect(() => {
    const findScrollContainer = () => {
      const table = document.querySelector(
        '[aria-label="Transactions table"]'
      );
      if (!table) return null;

      const scrollContainer =
        table.querySelector(".overflow-auto") ||
        table.querySelector('[style*="overflow"]') ||
        table.closest(".overflow-auto");
      return scrollContainer as HTMLElement;
    };

    const scrollToRow = (rowIndex: number) => {
      const container = findScrollContainer();
      if (!container) return;

      const rowHeight = 64;
      const targetScrollTop = rowIndex * rowHeight;

      container.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    };

    const scrollTable = () => {
      if (hasReachedBottom) return;

      currentRowRef.current += 1;

      if (currentRowRef.current >= tableData.length - 5) {
        setIsLoading(true);
        setHasReachedBottom(true);

        setTimeout(() => {
          setIsLoading(false);
          currentRowRef.current = 0;
          scrollToRow(0);
          setHasReachedBottom(false);
        }, 3000);
      } else {
        scrollToRow(currentRowRef.current);
      }
    };

    const scrollInterval = setInterval(scrollTable, 1500);
    return () => clearInterval(scrollInterval);
  }, [hasReachedBottom, tableData.length]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "success";
      case "pending":
        return "warning";
      case "failed":
        return "danger";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-8xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-slide-up">
          <div className="bg-[#009688] rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Total Transactions</p>
                <p className="text-2xl font-bold text-white mt-1">{tableData.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">💰</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#009688] rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Total Amount</p>
                <p className="text-2xl font-bold text-white mt-1">
                  {tableData.reduce((sum, item) => sum + item.amount, 0).toLocaleString()} THB
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xl">📈</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#009688] rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Total Fees</p>
                <p className="text-2xl font-bold text-white mt-1">
                  {tableData.reduce((sum, item) => sum + item.fee, 0).toLocaleString()} THB
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-xl">💸</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#009688] rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Success Rate</p>
                <p className="text-2xl font-bold text-white mt-1">100%</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 text-xl">✅</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Recent Transactions</h2>
              </div>
              <div className="flex items-center gap-3">
                <Chip color="success" variant="flat" className="px-3 py-2">
                  <span className="font-medium">Live Updates</span>
                </Chip>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Table
              style={{ scrollbarWidth: "none" }}
              aria-label="Transactions table"
              className="max-h-[600px] w-full"
              isHeaderSticky
              isStriped
              color="primary"
              classNames={{
                base: "scrollbar-hide",
                wrapper: "p-0 bg-transparent",
                th: "bg-[#009688] text-white p-4 text-center border-none h-16 text-sm font-semibold uppercase tracking-wide",
                tbody: "[&_tr]:h-16 bg-white",
                td: "p-4 text-center text-sm font-medium text-gray-700 border-b border-gray-100",
                tr: "hover:bg-blue-50 transition-colors duration-200 animate-slide-in",
              }}
            >
              <TableHeader>
                <TableColumn className="rounded-tl-2xl">NO</TableColumn>
                <TableColumn>REF ID</TableColumn>
                <TableColumn>FROM ACCOUNT</TableColumn>
                <TableColumn>FROM ACCOUNT NAME</TableColumn>
                <TableColumn>TO ACCOUNT</TableColumn>
                <TableColumn>TO ACCOUNT NAME</TableColumn>
                <TableColumn>AMOUNT</TableColumn>
                <TableColumn>FEE</TableColumn>
                <TableColumn className="rounded-tr-2xl">STATUS</TableColumn>
              </TableHeader>
              <TableBody items={tableData}>
                {(item) => (
                  <TableRow 
                    key={item.id}
                    className="hover:scale-[1.02] transition-transform duration-200"
                  >
                    <TableCell>
                      <div className="flex items-center justify-center">
                        <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {tableData.indexOf(item) + 1}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                        {item.ref}
                      </code>
                    </TableCell>
                    <TableCell>
                      <div className="text-center">
                        <p className="font-semibold text-gray-800">
                          {item.from_bank} <span className="text-gray-500">({item.from_ccy})</span>
                        </p>
                        <p className="text-xs text-gray-600 mt-1 font-mono">
                          {maskAccountNumber(item.from_acc)}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="max-w-xs truncate" title={item.from_acc_name}>
                        {item.from_acc_name}
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="text-center">
                        <p className="font-semibold text-gray-800">
                          {item.to_bank} <span className="text-gray-500">({item.to_ccy})</span>
                        </p>
                        <p className="text-xs text-gray-600 mt-1 font-mono">
                          {maskAccountNumber(item.to_acc)}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="max-w-xs truncate" title={item.to_acc_name}>
                        {item.to_acc_name}
                      </p>
                    </TableCell>
                    <TableCell>
                      <span className="font-bold text-green-600">
                        {item.amount.toLocaleString()} {item.amount_ccy}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-orange-600">
                        {item.fee.toLocaleString()} {item.fee_ccy}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        color={getStatusColor(item.status)} 
                        variant="flat"
                        className="px-3 py-2 font-semibold"
                      >
                        {item.status}
                      </Chip>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            {/* Enhanced Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 backdrop-blur-sm bg-white/90 flex justify-center items-center z-10 animate-fade-in">
                <div className="text-center">
                  <div className="relative w-24 h-24 flex justify-center items-center mb-4">
                    <Spinner
                      size="lg"
                      variant="gradient"
                      classNames={{
                        wrapper: "w-24 h-24",
                        circle1: "border-b-3 border-teal-500",
                        circle2: "border-b-3 border-blue-500",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/logobank.jpg"
                        alt="Loading"
                        width={60}
                        height={60}
                        className="rounded-full object-cover border-2 border-white shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <p>Showing <span className="font-semibold">{tableData.length}</span> transactions</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Auto-scroll enabled</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Real-time updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-in {
          from { transform: translateX(-10px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default Transactions;