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
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineXCircle } from "react-icons/hi";

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
          icon: <IoMdCheckmarkCircleOutline size={22} />,
        };
      case "E406":
        return {
          color: "danger" as const,
          label: "ລະບົບປິດ",
          icon: <HiOutlineXCircle size={22} />,
        };
      case "TLC1":
        return {
          color: "danger" as const,
          label: "ເບີໂທບໍ່ຖຶກຕ້ອງ",
          icon: <HiOutlineXCircle size={22} />,
        };
      case "E405":
        return {
          color: "danger" as const,
          label: "Method Not Allowed",
          icon: <HiOutlineXCircle size={22} />,
        };
      default:
        return {
          color: "danger" as const,
          label: "ບໍ່ສຳເລັດ",
          icon: <HiOutlineXCircle size={22} />,
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

  // Helper function to check if FNC NAME column should be hidden
  const shouldHideFncName = (currentTab: string) => {
    return ["IRTGS-ILPFT", "IOTFT-IOWFT", "IFLFX"].includes(currentTab);
  };

  const TransactionTable = ({
    data,
    isLoading,
    currentTab,
  }: {
    data: transactionsType[] | null;
    isLoading: boolean;
    currentTab: string;
  }) => {
    const hideFncName = shouldHideFncName(currentTab);
    const totalColumns = hideFncName ? 7 : 8;
    const gridTemplateColumns = hideFncName
      ? "80px 1fr 1fr 1fr 1fr 1fr 1fr"
      : "80px 1fr 1fr 1fr 1fr 1fr 1fr 1fr";

    const headers = [
      "ລຳດັບ",
      "ວັນທີ",
      "ຈາກບັນຊີ",
      "ຫາບັນຊີ",
      ...(hideFncName ? [] : ["ຟັງຊັນ"]),
      "ຈຳນວນເງິນ",
      "ເລກອ້າງອິງ",
      "ສະຖານະ",
    ];

    return (
      <Card className="pb-6">
        <CardBody className="p-6">
          <div className="h-[600px] relative rounded-lg border border-gray-200 bg-white shadow-inner overflow-hidden w-full">
            {/* Fixed Header */}
            <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
              <div
                className="grid w-full"
                style={{
                  gridTemplateColumns: gridTemplateColumns,
                }}
              >
                {headers.map((header) => (
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
              className="h-[calc(100%-48px)] overflow-hidden relative w-full"
            >
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">ກຳລັງໂຫຼດ...</div>
                </div>
              ) : data && data.length > 0 ? (
                <div className="space-y-0 w-full">
                  {data.map((transaction, index) => (
                    <div
                      key={transaction.id}
                      className="grid border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 w-full"
                      style={{
                        gridTemplateColumns: gridTemplateColumns,
                      }}
                    >
                      {/* ສຳດັບ Column (Index + 1) - Smaller width */}
                      <div className="py-4 px-6 text-gray-700 text-base border-r border-gray-100 font-medium flex items-center justify-center min-h-[60px]">
                        <span className="leading-relaxed">
                          <p className="font-semibold text-gray-800 text-sm">
                            {index + 1}
                          </p>
                        </span>
                      </div>

                      {/* ວັນທີ Column (Date) */}
                      <div className="py-4 px-6 text-gray-700 text-base border-r border-gray-100 font-medium flex items-center min-h-[60px]">
                        <span className="leading-relaxed">
                          <p className="text-gray-800 text-sm">
                            {transaction?.payment_date || "N/A"}
                          </p>
                        </span>
                      </div>
                      {/* ຈາກບັນຊີ Column (FROM ACCOUNT) */}
                      <div className="py-4 px-6 text-gray-800 text-base border-r border-gray-100 min-h-[60px]">
                        <span className="leading-relaxed">
                          <p className="font-medium">
                            {transaction.from_bank} (
                            {transaction?.from_account_ccy})
                          </p>
                          <p className="text-sm">{transaction.from_account}</p>
                        </span>
                      </div>

                      {/* ຫາບັນຊີ Column (TO ACCOUNT) */}
                      <div className="py-4 px-6 text-gray-800 text-base border-r border-gray-100 min-h-[60px]">
                        <span className="leading-relaxed">
                          <p className="font-medium">
                            {transaction?.to_bank} (
                            {transaction?.to_account_ccy})
                          </p>
                          <p className="text-sm">{transaction.to_account}</p>
                        </span>
                      </div>

                      {/* ຈຸດປະສົງ Column (FNC NAME) - Only show for specific tabs */}
                      {!hideFncName && (
                        <div className="py-4 px-6 text-gray-700 text-base border-r border-gray-100 font-medium flex items-center min-h-[60px]">
                          <span className="leading-relaxed">
                            <p className="font-medium text-gray-800 text-sm">
                              {extractDisplayText(transaction.fnc_name) ||
                                "N/A"}
                            </p>
                          </span>
                        </div>
                      )}

                      {/* ຈຳນວນເງິນ Column (AMOUNT) */}
                      <div className="py-4 px-6 text-base text-gray-600 border-r border-gray-100 flex items-center font-medium min-h-[60px]">
                        <span className="leading-relaxed">
                          {transaction.amount?.toLocaleString()}{" "}
                          {transaction.fee_amount_ccy}
                        </span>
                      </div>
                      {/* ເລກອ້າງອິງ Column (REF_NO) */}
                      <div className="py-4 px-6 text-gray-700 text-base border-r border-gray-100 font-medium flex items-center min-h-[60px]">
                        <span className="leading-relaxed">
                          <p className="text-gray-800 text-sm">
                            {transaction.ref_no || "null"}
                          </p>
                        </span>
                      </div>

                      {/* ສະຖານະ Column (STATUS) */}
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
                  <div className="text-gray-500">ບໍ່ມີທຸລະກໍາ</div>
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
  };

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
