"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Spinner,
  Button,
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
    },
    {
      id: "2",
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
    },
    {
      id: "3",
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
    },
    {
      id: "4",
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
    },
    {
      id: "5",
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
    },
    {
      id: "6",
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
    },
    {
      id: "7",
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
    },
    {
      id: "8",
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
    },
    {
      id: "9",
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
    },
    {
      id: "10",
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
    },
    {
      id: "11",
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
    },
    {
      id: "12",
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
    },
    {
      id: "13",
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
    },
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

    const scrollToRow = (rowIndex: number) => {
      const container = findScrollContainer();
      if (!container) return;

      const rowHeight = 48; // Based on your CSS: [&_tr]:h-12 (3rem = 48px)
      const targetScrollTop = rowIndex * rowHeight;

      container.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    };

    const scrollTable = () => {
      if (hasReachedBottom) return;

      // Move to next row
      currentRowRef.current += 1;

      // Check if we reached the last row
      if (currentRowRef.current >= tableData.length) {
        setIsLoading(true);
        setHasReachedBottom(true);

        setTimeout(() => {
          setIsLoading(false);
          // Reset to first row
          currentRowRef.current = 0;
          scrollToRow(0);
          setHasReachedBottom(false);
        }, 4000); // Wait 7 seconds at bottom
      } else {
        // Scroll to next row
        scrollToRow(currentRowRef.current);
      }
    };

    const scrollInterval = setInterval(scrollTable, 1000); // Scroll every 1 seconds
    return () => clearInterval(scrollInterval);
  }, [hasReachedBottom, tableData.length]);

  return (
    <div className="flex justify-center items-center mt-1 pt-0 relative">
      <Table
        style={{ scrollbarWidth: "none" }}
        aria-label="Example static collection table"
        className="max-h-[500px] w-full max-w-7xl mx-auto"
        isHeaderSticky
        isStriped
        color="primary"
        classNames={{
          base: "scrollbar-hide",
          wrapper: "p-0",
          th: "bg-[#009688] text-white p-2 text-center border-none h-12",
          tbody: "[&_tr]:h-12",
          td: "p-2 text-center",
        }}
      >
        <TableHeader>
          <TableColumn>NO</TableColumn>
          <TableColumn>REF</TableColumn>
          <TableColumn>FROM_ACCOUNT</TableColumn>
          <TableColumn>FROM_ACCONT_NAME</TableColumn>
          <TableColumn>TO_ACCOUNT</TableColumn>
          <TableColumn>TO_ACOUNT_NAME</TableColumn>
          <TableColumn>AMOUNT</TableColumn>
          <TableColumn>FEE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody items={tableData}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{tableData.indexOf(item) + 1}</TableCell>
              <TableCell>{item.ref}</TableCell>
              <TableCell>
                <p>
                  {item.from_bank} ({item.from_ccy})
                </p>
                <p>{maskAccountNumber(item.from_acc)}</p>
              </TableCell>
              <TableCell>
                <p>{item.from_acc_name}</p>
              </TableCell>
              <TableCell>
                <p>
                  {item.to_bank} ({item.from_ccy})
                </p>
                <p>{maskAccountNumber(item.to_acc)}</p>
              </TableCell>
              <TableCell>
                <p>{item.to_acc_name}</p>
              </TableCell>
              <TableCell>
                {item.amount.toLocaleString()} {item.amount_ccy}
              </TableCell>
              <TableCell>
                {item.fee.toLocaleString()} {item.fee_ccy}
              </TableCell>
              <TableCell>
                <Button radius="full" size="sm" color="success">
                  <span className="text-white">success</span>
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {isLoading && (
  <div className="absolute top-13 left-10 right-10 bottom-0 backdrop-blur-md bg-white/80 flex justify-center items-center z-10">
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-20 h-20">
        <Spinner 
          size="lg"
          variant="simple"
          color="default"
          className="absolute inset-0"
          classNames={{
            wrapper: "w-20 h-20",
          }}
        />
        <img 
          src="/logobank.jpg"
          alt="Loading"
          className="absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
        />
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Transactions;
