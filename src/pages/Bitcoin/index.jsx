import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function BitcoinPage() {
  return (
    <>
      <Helmet>
        <title>KOINX ASSIGNMENT</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[17px] bg-blue_gray-50_01 overflow-x-hidden">
        <header className="flex justify-center items-center w-full border-gray-300 border-b border-solid bg-white-A700 shadow-xs">
          <div className="flex flex-row justify-center w-full mx-auto max-w-[1324px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-center py-6">
                <Img src="images/img_1_koinx_logo.png" alt="1koinxlogo_one" className="w-full object-cover" />
              </div>
              <div className="flex flex-row justify-start items-center w-[69%] gap-[45px]">
                <div className="flex flex-row justify-start items-center w-[81%] pl-[355px] gap-8">
                  <Text />
                  <Heading
                    size="s"
                    as="h6"
                    className="flex justify-center items-center w-[79px] h-[70px] py-[25px] tracking-[-0.16px] bg-white-A700"
                  >
                    Crypto Taxes
                  </Heading>
                  <Heading
                    size="s"
                    as="h6"
                    className="flex justify-center items-center w-[79px] h-[70px] py-[25px] tracking-[-0.16px] bg-white-A700"
                  >
                    Free Tools
                  </Heading>
                  <Heading
                    size="s"
                    as="h6"
                    className="flex justify-center items-center w-[128px] h-[70px] py-[25px] tracking-[-0.16px] bg-white-A700"
                  >
                    Resource Center
                  </Heading>
                </div>
                <Button
                  size="lg"
                  variant="gradient"
                  color="blue_A400_indigo_A700"
                  className="tracking-[-0.16px] font-semibold min-w-[136px]"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full gap-14">
          <div className="flex flex-col items-start justify-start w-full gap-[17px] max-w-[1328px]">
            <div className="flex flex-row justify-start w-[15%]">
              <div className="flex flex-row justify-start items-center w-[75%] gap-[9px]">
                <a href="#">
                  <Text as="p" className="!text-blue_gray-700_01 !font-normal">
                    Cryptocurrencies
                  </Text>
                </a>
                <Img src="images/img_icon.svg" alt="icon_one" className="h-[10px] w-[10px] mr-1" />
              </div>
              <div className="flex flex-row justify-center w-[26%]">
                <Text as="p" className="!text-gray-900">
                  Bitcoin
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full pb-[22px]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row justify-start items-start w-full gap-5">
                  <div className="flex flex-col items-center justify-start w-[67%] gap-[9px]">
                    <div className="flex flex-col items-start justify-start w-full pl-[23px] py-[23px] bg-white-A700 rounded-lg">
                      <div className="flex flex-row justify-start items-center w-full gap-9">
                        <div className="flex flex-row justify-start w-[19%]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="flex flex-row justify-start items-center w-full">
                              <Img
                                src="images/img_image_160.png"
                                alt="image160_one"
                                className="w-[36px] object-cover"
                              />
                              <div className="flex flex-row justify-end w-[79%]">
                                <div className="flex flex-row justify-start items-start w-[94%] gap-2">
                                  <div className="flex flex-row justify-center w-[67%]">
                                    <Heading as="h1" className="!text-gray-900_06">
                                      Bitcoin
                                    </Heading>
                                  </div>
                                  <Heading size="s" as="h2" className="mt-[3px] !text-blue_gray-600">
                                    BTC
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-[10%]">
                          <Button
                            color="blue_gray_400_02"
                            size="lg"
                            className="w-full  flex justify-center font-medium border-blue_gray-400 border border-solid"
                          >
                            Rank #1
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-start w-[67%] mt-10">
                        <div className="flex flex-col items-start justify-start gap-1.5 py-0.5">
                          <Heading size="2xl" as="h3" className="!text-gray-900_06">
                            $46,953.04
                          </Heading>
                          <Text size="2xl" as="p">
                            ₹ 39,42,343
                          </Text>
                        </div>
                        <div className="flex flex-row justify-center w-[67%]">
                          <div className="flex flex-row justify-start w-full pb-0.5">
                            <div className="flex flex-row justify-start w-[36%]">
                              <div className="flex flex-row justify-start items-start w-full gap-3 py-[3px]">
                                <Button
                                  leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                                  className="mb-0.5 gap-2 font-medium min-w-[84px] rounded"
                                >
                                  2.51%
                                </Button>
                                <Text as="p" className="mt-1 !text-blue_gray-400_02">
                                  (24H)
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-px w-[97%] mt-6 bg-gray-300_01" />
                      <Tabs
                        className="flex flex-col items-center justify-start w-[97%] mt-[22px] mb-[9px] gap-[39px]"
                        selectedTabClassName="!text-blue-800_01 bg-blue-50_01 rounded-[10px]"
                        selectedTabPanelClassName="py-[3px] relative tab-panel--selected"
                      >
                        <div className="flex flex-row justify-between w-[99%]">
                          <Heading size="s" as="h4" className="mt-px !text-gray-900_06">
                            Bitcoin Price Chart (USD)
                          </Heading>
                          <TabList className="flex flex-row justify-between items-center w-auto gap-[17px]">
                            <Tab className="h-[16px] text-blue_gray-600 text-[13px] font-medium">1H</Tab>
                            <Tab className="text-blue_gray-600 text-[13px] font-medium">24H</Tab>
                            <Tab className="h-[16px] text-blue-800_01 text-[13px] font-medium">7D</Tab>
                            <Tab className="text-blue_gray-600 text-xs font-medium">1M</Tab>
                            <Tab className="text-blue_gray-600 text-xs font-medium">3M</Tab>
                            <Tab className="text-blue_gray-600 text-xs font-medium">6M</Tab>
                            <Tab className="h-[16px] text-blue_gray-600 text-[13px] font-medium">1Y</Tab>
                            <Tab className="text-blue_gray-600 text-[13px] font-medium">ALL</Tab>
                          </TabList>
                        </div>
                        {[...Array(8)].map((_, index) => (
                          <TabPanel key={`tab-panel${index}`} className="justify-center w-full absolute">
                            <div className="flex flex-row justify-start w-full py-[3px]">
                              <div className="flex flex-row justify-start w-[99%]">
                                <div className="flex flex-row justify-start items-start w-full">
                                  <div className="flex flex-col items-center justify-start w-[5%] gap-[45px] z-[1]">
                                    <Text size="xs" as="p" className="text-right">
                                      47,000
                                    </Text>
                                    <Text size="xs" as="p" className="text-right">
                                      46,000
                                    </Text>
                                    <Text size="xs" as="p" className="text-right">
                                      45,000
                                    </Text>
                                    <Text size="xs" as="p" className="text-right">
                                      44,000
                                    </Text>
                                    <Text size="xs" as="p" className="text-right">
                                      42,000
                                    </Text>
                                    <Text size="xs" as="p" className="text-right">
                                      42,000
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[96%] mt-[5px] ml-[-3px] gap-1.5">
                                    <div className="flex flex-col items-center justify-start w-full ml-1.5 pb-2">
                                      <div className="h-px w-full bg-blue_gray-50_03" />
                                      <div className="h-[318px] w-full mt-[35px] relative">
                                        <div className="flex flex-col items-center justify-start w-full gap-[58px] top-[7%] right-0 left-0 m-auto absolute">
                                          <div className="h-px w-full bg-blue_gray-50_03" />
                                          <div className="h-px w-full bg-blue_gray-50_03" />
                                          <div className="h-px w-full bg-blue_gray-50_03" />
                                          <div className="h-px w-full bg-blue_gray-50_03" />
                                          <div className="h-px w-full bg-blue_gray-50_03" />
                                        </div>
                                        <Img
                                          src="images/img_group.png"
                                          alt="image"
                                          className="justify-center h-[318px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_group_indigo_100.svg"
                                        alt="image_one"
                                        className="h-[10px] z-[1]"
                                      />
                                      <div className="h-px w-full mt-[-9px] bg-blue_gray-50_03" />
                                    </div>
                                    <div className="flex flex-row justify-start w-[92%]">
                                      <div className="flex flex-row justify-between w-full">
                                        <Text size="xs" as="p" className="text-center">
                                          16 Dec
                                        </Text>
                                        <Text size="xs" as="p" className="text-center">
                                          17 Dec
                                        </Text>
                                        <Text size="xs" as="p" className="text-center">
                                          18 Dec
                                        </Text>
                                        <Text size="xs" as="p" className="text-center">
                                          19 Dec
                                        </Text>
                                        <Text size="xs" as="p" className="text-center">
                                          20 Dec
                                        </Text>
                                        <Text size="xs" as="p" className="text-center">
                                          21 Dec
                                        </Text>
                                        <Text size="xs" as="p" className="text-center">
                                          22 Dec
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                        ))}
                      </Tabs>
                    </div>
                    <div className="flex flex-row justify-center w-full">
                      <div className="h-[70px] w-full relative">
                        <div className="flex flex-col items-start justify-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="h-[48px] w-full border-blue_gray-100 border-b border-solid" />
                          <Heading
                            size="s"
                            as="h5"
                            className="mt-[-48px] py-3.5 !text-blue-800_01 tracking-[-0.16px] border-blue-A700_01 border-b-[3px] border-solid"
                          >
                            Overview
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-center w-max h-full gap-8 left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-row justify-start w-[16%] py-6">
                            <Text size="2xl" as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Fundamentals
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-[16%] py-[23px]">
                            <Text size="2xl" as="p" className="mt-0.5 !text-gray-800 tracking-[-0.16px]">
                              News Insights
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-[13%] py-6">
                            <Text size="2xl" as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Sentiments
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[7%] py-6">
                            <Text size="2xl" as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Team
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-[13%] py-6">
                            <Text size="2xl" as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Technicals
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-[14%] py-6">
                            <Text size="2xl" as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Tokenomics
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[33%] gap-5">
                    <div className="flex flex-col items-center justify-start w-full gap-[19px] p-[31px] bg-blue-A700_01 rounded-[16px]">
                      <div className="flex flex-col items-center justify-start w-[90%] pb-4 gap-3.5">
                        <Heading as="h6" className="w-[82%] !text-white-A700 text-center !font-bold !leading-10">
                          Get Started with KoinX for FREE
                        </Heading>
                        <Text as="p" className="!text-gray-100_01 text-center leading-6">
                          With our range of features that you can equip for free,
                          <br />
                          KoinX allows you to be more educated and aware of your tax reports.
                        </Text>
                      </div>
                      <Img src="images/img_frame.svg" alt="image_two" className="h-[166px]" />
                      <Button
                        color="white_A700"
                        size="xl"
                        rightIcon={
                          <Img src="images/img_iconly_light_arrow_right.svg" alt="Iconly/Light/Arrow - Right" />
                        }
                        className="mb-[18px] gap-2.5 font-semibold min-w-[237px]"
                      >
                        Get Started for FREE
                        <br />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[23px] p-6 bg-white-A700 rounded-lg">
                      <div className="flex flex-row justify-start w-full">
                        <Heading as="h4">Trending Coins (24h)</Heading>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col w-full gap-5">
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-start items-center gap-1.5">
                              <Button color="indigo_400" size="xs" shape="circle" className="w-[24px]">
                                <Img src="images/img_component_50.svg" />
                              </Button>
                              <Text size="2xl" as="p" className="!text-gray-900">
                                Ethereum(ETH)
                              </Text>
                            </div>
                            <Button
                              leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                              className="gap-2 font-medium min-w-[84px] rounded"
                            >
                              8.21%
                            </Button>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-start items-center gap-1.5">
                              <Img
                                src="images/img_image_160.png"
                                alt="image160_one"
                                className="w-[24px] object-cover"
                              />
                              <Text size="2xl" as="p" className="!text-gray-900">
                                Bitcoin (BTC)
                              </Text>
                            </div>
                            <Button
                              leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                              className="gap-2 font-medium min-w-[84px] rounded"
                            >
                              5.26%
                            </Button>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-start items-center w-[42%] gap-1.5">
                              <Img
                                src="images/img_image_163.png"
                                alt="image163_one"
                                className="h-[24px] w-[24px] rounded-[50%]"
                              />
                              <Text size="2xl" as="p" className="!text-gray-900">
                                Polygon (MATIC)
                              </Text>
                            </div>
                            <Button
                              leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                              className="gap-2 font-medium min-w-[84px] rounded"
                            >
                              4.32%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[632px] w-[68%] mt-[9px]  relative">
                  <div className="justify-center h-[632px] w-[97%] left-0 bottom-0 -right-4 top-0 m-auto bg-white-A700 absolute rounded-lg">
                  <div className="flex flex-row justify-start  w-full -right-12 top-[3%]   absolute">
                    <Heading as="h4">Performance</Heading>
                  </div>
                  <div className="flex flex-col items-start justify-center w-max h-max left-0 bottom-0 right-0 top-20 m-auto absolute">
                    <div className="flex flex-row justify-start  w-full">
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-[45%] pb-[15px] gap-[10px]">
                          <div className="flex flex-row justify-center w-[95%]">
                            <div className="flex flex-row justify-center items-center w-full">
                              <div className="flex flex-col items-center justify-start w-[14%]  pb-[13px] gap-2.5">
                                <div className="flex flex-row justify-start w-full">
                                  <Text
                                    size="md"
                                    as="p"
                                    className="mt-2 !text-blue_gray-800_02 !text-[13.78px] !font-normal"
                                  >
                                    Today’s Low
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start w-full pt-[3px]">
                                  <Text size="xl" as="p" className="!text-blue_gray-800_02 !text-[15.63px]">
                                    46,930.22
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center w-[73%]">
                                <div className="flex flex-col items-end justify-start w-full">
                                  <Img
                                    src="images/img_div_pbar29range.png"
                                    alt="divpbar29range"
                                    className="w-full object-cover"
                                  />
                                  <div className="flex flex-col items-center justify-start w-[13%] mt-[-19px] mr-[102px] gap-[9px]">
                                    <Img src="images/img_div_absolute.svg" alt="divabsolute_one" className="h-[8px]" />
                                    <Text as="p" className="!text-blue_gray-800_02 !font-sfprotext !font-normal">
                                      $48,637.83
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[14%] pb-[13px] gap-2.5">
                                <div className="flex flex-row justify-end w-full">
                                  <Text
                                    size="md"
                                    as="p"
                                    className="mt-2 !text-blue_gray-800_02 text-right !text-[13.56px] !font-normal"
                                  >
                                    Today’s High
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-end w-full pt-[3px]">
                                  <Text size="xl" as="p" className="!text-blue_gray-800_02 text-right !text-[15.63px]">
                                    49,343.83
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center items-center w-[95%]">
                            <div className="flex flex-col items-center justify-start w-[15%] pb-[13px] gap-2.5">
                              <div className="flex flex-row justify-start w-full">
                                <Text as="p" className="mt-[5px] !text-blue_gray-800_02 !font-normal">
                                  52W Low
                                </Text>
                              </div>
                              <div className="flex flex-row justify-start w-full pt-[3px]">
                                <Text size="xl" as="p" className="!text-blue_gray-800_02 !text-[15.63px]">
                                  16,930.22
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_div_pbar29range.png"
                              alt="divpbar29range"
                              className="w-[72%] object-cover"
                            />
                            <div className="flex flex-col items-center justify-start w-[14%] pb-[13px] gap-2.5">
                              <div className="flex flex-row justify-end w-full">
                                <Text
                                  size="md"
                                  as="p"
                                  className="mt-2 !text-blue_gray-800_02 text-right !text-[13.78px] !font-normal"
                                >
                                  52W High
                                </Text>
                              </div>
                              <div className="flex flex-row justify-end w-full pt-[3px]">
                                <Text size="xl" as="p" className="!text-blue_gray-800_02 text-right !text-[15.63px]">
                                  49,743.83
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[28%] mt-[22px] gap-px">
                      <div className="flex flex-row ml-14 -right-4 w-[25%]">
                        <Heading size="md" as="h6" className="!text-blue_gray-800_02  !text-[18.91px]">
                          Fundamentals
                        </Heading>
                      </div>
                      <Img src="images/img_svg_margin.svg" alt="svgmargin_one" className="h-[20px]" />
                    </div>
                    <div className="flex flex-row justify-between items-center p-3 w-[42%] mt-3.5">
                      <div className="flex flex-col items-center justify-start w-[42%] pt-[18px]">
                        <div className="flex flex-row justify-between items-center w-full pr-[13px]">
                          <Text as="p" className="mb-px !text-blue_gray-400_02">
                            Bitcoin Price
                          </Text>
                          <Text size="md" as="p" className="!text-gray-900_03 text-right">
                            $16,815.46
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pt-[18px]">
                          <div className="flex flex-row justify-center w-full py-1 border-blue_gray-100 border-b border-solid">
                            <div className="flex flex-row justify-center w-[39%] pr-[3px] py-[3px] border-gray-300_03 border border-solid">
                              <Text as="p" className="mt-[11px] mb-[9px] !text-blue_gray-400_02">
                                24h Low / 24h High
                              </Text>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="pl-[35px] pr-[11px] py-3.5 !text-gray-900_03 text-right border-gray-300_03 border border-solid"
                            >
                              $16,382.07 / $16,874.12
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid">
                            <Text as="p" className="mt-[7px] mb-[5px] !text-blue_gray-400_02">
                              7d Low / 7d High
                            </Text>
                            <Text size="md" as="p" className="!text-gray-900_03 text-right">
                              $16,382.07 / $16,874.12
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between w-full pr-3 py-3 border-blue_gray-100 border-b border-solid">
                            <Text as="p" className="mt-[7px] mb-[5px] !text-blue_gray-400_02">
                              Trading Volume
                            </Text>
                            <Text as="p" className="!text-gray-900_03 text-right">
                              $23,249,202,782
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full pr-3 py-3 border-blue_gray-100 border-b border-solid">
                            <Text as="p" className="mt-1.5 mb-1 !text-blue_gray-400_02">
                              Market Cap Rank
                            </Text>
                            <Text size="md" as="p" className="h-[16px] !text-gray-900_03 text-right">
                              #1
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[48%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row justify-between items-center w-full pr-1 py-1 border-blue_gray-100 border-b border-solid">
                            <div className="flex flex-row justify-start py-3">
                              <Text as="p" className="mt-0.5 !text-blue_gray-400_02">
                                Market Cap
                              </Text>
                            </div>
                            <div className="flex flex-row justify-center mr-[7px]">
                              <Text as="p" className="!text-gray-900_03 text-right">
                                $323,507,290,047
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full pr-1 py-1 border-blue_gray-100 border-b border-solid">
                            <div className="flex flex-row justify-start py-[13px]">
                              <Text as="p" className="mt-px !text-blue_gray-400_02">
                                Market Cap Dominance
                              </Text>
                            </div>
                            <div className="flex flex-row justify-center mr-2">
                              <Text as="p" className="!text-gray-900_03 text-right">
                                38.343%
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full pr-1 py-1 z-[1] border-blue_gray-100 border-b border-solid">
                            <div className="flex flex-row justify-start py-[13px]">
                              <Text as="p" className="mt-px !text-blue_gray-400_02">
                                Volume / Market Cap
                              </Text>
                            </div>
                            <div className="flex flex-row justify-center mr-[7px]">
                              <Text size="md" as="p" className="!text-gray-900_03 text-right">
                                0.0718
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center w-full mt-[-3px]">
                            <div className="flex flex-col w-full">
                              <div className="flex flex-row justify-center w-full">
                                <div className="h-[61px] w-full py-[3px] relative">
                                  <div className="justify-center h-[54px] w-full left-0 bottom-0 right-0 top-0 m-auto border-blue_gray-100 border-b border-solid absolute" />
                                  <div className="flex flex-row justify-between items-center w-[97%] top-[18%] right-0 left-0 m-auto absolute">
                                    <Text as="p" className="!text-blue_gray-400_02">
                                      All-Time High
                                    </Text>
                                    <div className="flex flex-col items-end justify-start gap-[3px]">
                                      <Text as="p" className="!text-gray-900_03 !font-roboto text-right">
                                        <span className="text-gray-900_03 font-inter">$69,044.77 </span>
                                        <span className="text-red-500 font-inter">-75.6%</span>
                                      </Text>
                                      <Text size="xs" as="p" className="!text-gray-900_03 text-right !text-[11.2px]">
                                        Nov 10, 2021 (about 1 year)
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center w-full">
                                <div className="h-[61px] w-full py-[3px] relative">
                                  <div className="justify-center h-[54px] w-full left-0 bottom-0 right-0 top-0 m-auto border-blue_gray-100 border-b border-solid absolute" />
                                  <div className="flex flex-row justify-between items-center w-[97%] top-[18%] right-0 left-0 m-auto absolute">
                                    <Text as="p" className="!text-blue_gray-400_02">
                                      All-Time Low
                                    </Text>
                                    <div className="flex flex-col items-end justify-start gap-[3px]">
                                      <Text as="p" className="!text-gray-900_03 !font-roboto text-right">
                                        <span className="text-gray-900_03 font-inter">$67.81 </span>
                                        <span className="text-green-500 font-inter">24729.1%</span>
                                      </Text>
                                      <Text size="xs" as="p" className="!text-gray-900_03 text-right !text-[11.2px]">
                                        july 06, 2013 (aover 9 year)
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                 
                </div>
                <div className="h-[556px] w-[70%]  mt-5 relative">
                  <div className="justify-center h-[556px] w-[97%] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="justify-center h-[556px] w-[97%] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-lg">
                    <div className="flex flex-col items-center justify-start w-[78%] gap-[33px] bottom-[5%] left-[3%] m-auto absolute">
                      <div className="flex flex-col items-start justify-start w-full gap-3.5">
                        <div className="flex flex-row justify-start items-center w-full gap-px">
                          <div className="flex flex-row justify-start w-[15%]">
                            <Heading size="md" as="h6" className="!text-blue_gray-800_02 !text-[18.91px]">
                              Key Events
                            </Heading>
                          </div>
                          <Img
                            src="images/img_svg_margin_blue_gray_400_01.svg"
                            alt="svgmargin_three"
                            className="h-[20px]"
                          />
                        </div>
                        <div className="flex flex-col w-[65%] gap-px">
                          <div className="flex flex-row justify-start items-start w-full gap-2 p-[17px] border-blue-50 border border-solid bg-blue-50 rounded-[12px]">
                            <Img src="images/img_aside.svg" alt="image" className="h-[147px]" />
                            <div className="flex flex-col items-center justify-start w-[88%] mb-[21px]  gap-2">
                              <div className="flex flex-row justify-center w-full">
                                <div className="flex flex-row justify-start w-full">
                                  <Text as="p" className="w-[95%] !text-gray-900_04 !font-sfprotext leading-5">
                                    Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim
                                    tincidunt.
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center w-full">
                                <Text as="p" className="!text-blue_gray-700_01 !font-sfprotext !font-normal leading-5">
                                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
                                  Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a
                                  bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full pb-[22px] gap-[21px]">
                        <div className="flex flex-row justify-start items-center w-full gap-px">
                          <div className="flex flex-row justify-start w-[24%]">
                            <Heading size="md" as="h6" className="!text-blue_gray-800_02 !text-[18.91px]">
                              Analyst Estimates
                            </Heading>
                          </div>
                          <Img
                            src="images/img_svg_margin_blue_gray_400_01.svg"
                            alt="svgmargin_five"
                            className="h-[20px]"
                          />
                        </div>
                        <div className="flex flex-row justify-center items-center w-full">
                          <div className="flex flex-row justify-start w-[22%]">
                            <div className="flex flex-col items-center justify-center w-[75%] p-[27px] bg-blue_gray-50 rounded-[50%]">
                              <div className="flex flex-row justify-start items-center w-[97%] gap-0.5 py-[3px] my-1">
                                <div className="flex flex-col items-center justify-center w-[74%]">
                                  <Text size="4xl" as="p" className="h-[45px] mb-px !text-teal-A700 !text-[36.41px]">
                                    76
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[24%]">
                                  <Text size="2xl" as="p" className="!text-teal-A700">
                                    %
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-[78%] gap-px">
                            <div className="flex flex-row justify-start items-center w-full p-2">
                              <div className="flex flex-row justify-start w-[10%]">
                                <Text size="xl" as="p" className="mt-0.5 !text-blue_gray-400_01">
                                  Buy
                                </Text>
                              </div>
                              <div className="h-[8px] w-[65%] bg-teal-500 rounded-sm" />
                              <div className="flex flex-row justify-end w-[8%]">
                                <Text as="p" className="!text-blue_gray-400_01 !text-[14.25px]">
                                  76%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start items-center w-full p-2">
                              <div className="flex flex-row justify-start w-[10%]">
                                <Text size="xl" as="p" className="mt-px !text-blue_gray-400_01 !text-[15.13px]">
                                  Hold
                                </Text>
                              </div>
                              <div className="h-[8px] w-[7%] bg-gray-400 rounded-sm" />
                              <div className="flex flex-row justify-center w-[8%]">
                                <Text size="xl" as="p" className="!text-blue_gray-400_01 !text-[15.63px]">
                                  8%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start items-center w-full p-2">
                              <div className="flex flex-row justify-start w-[10%]">
                                <Text size="xl" as="p" className="mt-px !text-blue_gray-400_01 !text-[15.13px]">
                                  Sell
                                </Text>
                              </div>
                              <div className="h-[8px] w-[13%] bg-red-500 rounded-sm" />
                              <div className="flex flex-row justify-end w-[8%]">
                                <Text size="xl" as="p" className="!text-blue_gray-400_01 !text-[15.63px]">
                                  16%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start w-full -right-4 top-[4%] m-auto absolute">
                      <Heading as="h4">Sentiment</Heading>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[48%] right-0 top-[19%] p-[17px] m-auto border-blue-50 border border-solid bg-blue_gray-50 absolute rounded-[12px]">
                    <div className="flex flex-row justify-start items-start w-full mb-[21px] gap-2">
                      <Img
                        src="images/img_frame_1116601921.svg"
                        alt="circleimage"
                        className="h-[44px] w-[44px] mt-px rounded-[50%]"
                      />
                      <div className="flex flex-col items-center justify-start w-[88%] gap-2">
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-row justify-start w-full">
                            <Text as="p" className="w-[95%] !text-gray-900_04 !font-sfprotext leading-5">
                              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-full">
                          <div className="h-[100px] w-full relative">
                            <Text
                              as="p"
                              className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto !text-blue_gray-700_01 !font-sfprotext !font-normal leading-5 absolute"
                            >
                              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet
                              sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in.
                              Sed vitae sit nisi viverra <br />
                              in a adipisinc metus quis del
                            </Text>
                            <Img
                              src="images/img_button.svg"
                              alt="button_one"
                              className="h-[60px] w-[60px] right-[21%] top-[7%] m-auto absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    </div>
                    
                </div>
                <div className="h-[1012px] w-[69%] mt-5 relative">
                  <div className="justify-center h-[995px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="justify-center h-[995px] w-[97%] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-lg" />
                    <div className="flex flex-col items-center justify-start w-[91%] gap-[15px] top-[8%] right-0 left-0 m-auto absolute">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Heading size="md" as="h6" className="!text-gray-900_06 !font-bold">
                          What is Bitcoin?
                        </Heading>
                        <Text size="2xl" as="p" className="mt-2.5 !text-gray-800 !leading-[160%]">
                          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is
                          +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of
                          $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply
                          of 19.24 M BTC and a max supply of 21 M BTC.
                        </Text>
                        <div className="h-px w-full mt-[15px] bg-blue_gray-100_99" />
                        <Heading size="md" as="h6" className="mt-[15px] !text-gray-900_06 !font-bold">
                          Lorem ipsum dolor sit amet
                        </Heading>
                        <Text size="2xl" as="p" className="mt-[9px] !text-gray-800 !leading-[160%]">
                          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam
                          id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
                          sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
                          pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                          rhoncus. <br />
                          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque
                          auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus
                          phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id
                          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa
                          turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer
                          pellentesque enim convallis ultricies at.
                          <br />
                          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac.
                          Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis
                          lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
                          dui
                        </Text>
                        <div className="h-px w-full mt-[15px] bg-blue_gray-100_99" />
                      </div>
                      <div className="flex flex-col items-center  justify-start w-full gap-[15px]">
                        <div className="flex flex-col items-start justify-start w-full gap-2">
                          <div className="flex flex-row justify-start py-1.5">
                            <Heading as="h4" className="mt-[3px]">
                              Already Holding Bitcoin?
                            </Heading>
                          </div>
                          <div className="flex flex-row w-full  mb-10 pr-[15px] gap-[31px]">
                            <div className="flex flex-row justify-start items-start w-[49%] gap-[27px] p-[11px] bg-gradient1 rounded-[7px]">
                              <Img
                                src="images/img_rectangle_11947.png"
                                alt="image"
                                className="w-[128px] mt-px object-cover rounded-lg"
                              />
                              <div className="flex flex-col items-start justify-start w-[54%] mt-[9px] mr-3.5 gap-4">
                                <div className="flex flex-row justify-start w-full">
                                  <div className="flex flex-row justify-start w-full">
                                    <div className="flex flex-row justify-start w-full">
                                      <Heading size="lg" as="h5" className="!text-white-A700">
                                        Calculate your Profits
                                      </Heading>
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  color="white_A700"
                                  size="md"
                                  rightIcon={
                                    <Img
                                      src="images/img_iconly_light_arrow_right.svg"
                                      alt="Iconly/Light/Arrow - Right"
                                    />
                                  }
                                  className="gap-1.5 font-semibold min-w-[132px]"
                                >
                                  Check Now
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start items-start w-[49%] gap-[27px] p-[11px] bg-gradient2 rounded-[7px]">
                              <Img
                                src="images/img_rectangle_11947_128x128.png"
                                alt="image"
                                className="w-[128px] mt-px object-cover rounded-lg"
                              />
                              <div className="flex flex-col items-start justify-start w-[54%] mt-[9px] mr-3.5 gap-4">
                                <div className="flex flex-row justify-start w-full">
                                  <div className="flex flex-row justify-start w-full">
                                    <div className="flex flex-row justify-start w-full">
                                      <Heading size="lg" as="h5" className="!text-white-A700">
                                        Calculate your tax liability
                                      </Heading>
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  color="white_A700"
                                  size="md"
                                  rightIcon={
                                    <Img
                                      src="images/img_iconly_light_arrow_right.svg"
                                      alt="Iconly/Light/Arrow - Right"
                                    />
                                  }
                                  className="gap-1.5 font-semibold min-w-[132px]"
                                >
                                  Check Now
                                </Button>
                              </div>
                            </div>
                          </div>
                        
                        </div>
                       
                        <div className="h-px w-full  bg-blue_gray-100_99" />
                       
                      </div>
                     
                    </div>
                    <div className="flex flex-row justify-center w-[91%] bottom-0 right-0 left-0  m-auto absolute">
                    <Text size="2xl" as="p" className="!text-gray-800 !leading-[160%]">
                      Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi
                      adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
                      congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                    </Text>
                  </div>
                    <div className="flex flex-row justify-start w-full -right-9 top-[2%] m-auto absolute">
                      <Heading as="h4">About Bitcoin</Heading>
                    </div>
                  </div>
                 
                </div>
                <div className="h-[539px] w-[69%] p-5 mt-[3px] relative">
                  <div className="justify-center h-[539px] w-[97%] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-lg">
                  <div className="flex flex-row justify-start w-full -right-4 top-[4%] m-auto absolute">
                    <Heading as="h4">Tokenomics</Heading>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-center justify-start w-[98%]">
                      <div className="flex flex-row justify-start w-full py-1">
                        <Heading size="lg" as="h5" className="mb-px !text-gray-900_02 !font-semibold">
                          Initial Distribution
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-6 py-[15px]">
                        <Img src="images/img_frame_1116601936.svg" alt="image_three" className="h-[179px] w-[179px]" />
                        <div className="flex flex-row justify-start w-[27%]">
                          <div className="flex flex-col items-center justify-start w-full gap-4 py-[27px]">
                            <div className="flex flex-row justify-center w-full">
                              <Img
                                src="images/img_span_circle_margin.svg"
                                alt="image_four"
                                className="h-[20px] w-[21px]"
                              />
                              <div className="flex flex-row justify-center w-[91%]">
                                <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                  Crowdsale investors: 80%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start w-full">
                              <Img
                                src="images/img_span_circle_margin_amber_700.svg"
                                alt="image_five"
                                className="h-[20px] w-[21px]"
                              />
                              <div className="flex flex-row justify-center w-[60%]">
                                <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                  Foundation: 20%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text size="2xl" as="p" className="!text-gray-800 p-2 !leading-[160%]">
                      Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim
                      vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce
                      eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis
                      augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui
                      metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
                      mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
                    </Text>
                  </div>
                  </div>
                 
                </div>
                <div className="h-[776px] w-[69%] mt-5 p-5  relative">
                  <div className="justify-center h-[776px] w-[97%] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-lg">
                  <div className="flex flex-row justify-start w-full -right-4 top-[3%] m-auto absolute">
                    <Heading as="h4">Team</Heading>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full gap-6 left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-row justify-center w-full">
                        <Text size="2xl" as="p" className="!text-gray-800 !leading-[160%]">
                          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi
                          integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col w-[99%] gap-[23px]">
                      <div className="flex flex-row justify-start items-center w-full gap-4 p-[9px] border-light_blue-A700 border border-solid bg-blue-50 rounded-[7px]">
                        <div className="flex flex-col items-center justify-start w-[16%] gap-3">
                          <div className="flex flex-col items-center justify-start w-[75%]">
                            <div className="flex flex-col items-center justify-start w-full bg-blue_gray-800 rounded-md">
                              <Img
                                src="images/img_image_209.png"
                                alt="john_smith_one"
                                className="w-full object-cover rounded-md"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[77%] gap-[5px]">
                            <Heading size="xs" as="p" className="text-center">
                              John Smith
                            </Heading>
                            <Text size="s" as="p" className="!text-blue_gray-400_03 text-center !font-medium">
                              Designation here
                            </Text>
                          </div>
                        </div>
                        <Text as="p" className="w-[81%] !text-gray-900 !font-normal p-2 leading-[160%]">
                          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit
                          id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis
                          laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
                          consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam
                          mi gravida praesent interdu
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-4 p-[9px] border-light_blue-A700 border border-solid bg-blue-50 rounded-[7px]">
                        <div className="flex flex-col items-center justify-start w-[16%] gap-3">
                          <div className="flex flex-col items-center justify-start w-[75%]">
                            <div className="flex flex-col items-center justify-start w-full bg-blue_gray-800 rounded-md">
                              <Img
                                src="images/img_image_209_104x96.png"
                                alt="image209_one"
                                className="w-full object-cover rounded-md"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[79%] gap-[5px]">
                            <Heading size="xs" as="p" className="text-center">
                              Elina Williams
                            </Heading>
                            <Text size="s" as="p" className="!text-blue_gray-400_03 text-center !font-medium">
                              Designation here
                            </Text>
                          </div>
                        </div>
                        <Text as="p" className="w-[81%] !text-gray-900 !font-normal p-2 leading-[160%]">
                          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit
                          id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis
                          laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
                          consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam
                          mi gravida praesent interdu
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-4 p-[9px] border-light_blue-A700 border border-solid bg-blue-50 rounded-[7px]">
                        <div className="flex flex-col items-center justify-start w-[16%] gap-3">
                          <div className="flex flex-col items-center justify-start w-[75%]">
                            <div className="flex flex-col items-center justify-start w-full bg-blue_gray-800 rounded-md">
                              <Img
                                src="images/img_image_209_1.png"
                                alt="image209_one"
                                className="w-full object-cover rounded-md"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[77%] gap-[5px]">
                            <Heading size="xs" as="p" className="text-center">
                              John Smith
                            </Heading>
                            <Text size="s" as="p" className="!text-blue_gray-400_03 text-center !font-medium">
                              Designation here
                            </Text>
                          </div>
                        </div>
                        <Text as="p" className="w-[81%] !text-gray-900 !font-normal leading-[160%]">
                          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit
                          id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis
                          laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
                          consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam
                          mi gravida praesent interdu
                        </Text>
                      </div>
                    </div>
                  </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col w-full gap-px p-[51px] bg-white-A700">
              <div className="flex flex-col items-center justify-start w-full mt-4 pb-[30px] gap-5 mx-auto max-w-[1330px]">
                <div className="flex flex-row justify-start w-[98%]">
                  <Heading as="h2" className="mt-1 !text-gray-900_01">
                    You May Also Like
                  </Heading>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center items-center w-full">
                    <Img src="images/img_button_next_slide.svg" alt="bnb_one" className="h-[44px] z-[1]" />
                    <div className="flex flex-row w-[99%] ml-[-8px] gap-2.5">
                      <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
                        <div className="flex flex-col items-start justify-start w-[54%] gap-[11px]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="flex flex-row justify-start items-center w-full">
                              <div className="flex flex-row justify-start items-center w-[57%]">
                                <Img
                                  src="images/img_img_margin.png"
                                  alt="you_may_also"
                                  className="w-[50%] object-cover"
                                />
                                <div className="flex flex-row justify-start w-[50%]">
                                  <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                    BNB
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start w-[44%]">
                                <Text
                                  size="s"
                                  as="p"
                                  className="flex justify-center items-center w-[50px] h-[20px] p-[3px] !text-teal-400 bg-teal-500_0f rounded-sm"
                                >
                                  +0.52%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <a href="#">
                            <Text size="3xl" as="p" className="!text-gray-900_05">
                              $319.34
                            </Text>
                          </a>
                        </div>
                        <Img src="images/img_202401031434_svg.svg" alt="bnb_two" className="h-[60px] mb-1" />
                      </div>
                      <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
                        <div className="flex flex-col items-start justify-start w-[52%] gap-[11px]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="flex flex-row justify-start items-center w-full">
                              <div className="flex flex-row justify-start items-center w-[58%]">
                                <Img src="images/img_img_margin.png" alt="bnb_one" className="w-[51%] object-cover" />
                                <div className="flex flex-row justify-start w-[50%]">
                                  <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                    SOL
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start w-[43%]">
                                <Text
                                  size="s"
                                  as="p"
                                  className="flex justify-center items-center w-[48px] h-[20px] p-[3px] !text-red-300 bg-red-400_19 rounded-sm"
                                >
                                  -2.89%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <a href="#">
                            <Text size="3xl" as="p" className="!text-gray-900_05">
                              $109.33
                            </Text>
                          </a>
                        </div>
                        <Img src="images/img_202401031434_svg.svg" alt="image" className="h-[60px] mb-1" />
                      </div>
                      <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
                        <div className="flex flex-col items-start justify-start w-[53%] gap-[11px]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="flex flex-row justify-start items-center w-full">
                              <div className="flex flex-row justify-start items-center w-[57%]">
                                <Img src="images/img_img_margin.png" alt="bnb_one" className="w-[52%] object-cover" />
                                <div className="flex flex-row justify-start w-[49%]">
                                  <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                    XRP
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start w-[44%]">
                                <Text
                                  size="s"
                                  as="p"
                                  className="flex justify-center items-center w-[50px] h-[20px] p-[3px] !text-teal-400 bg-teal-500_0f rounded-sm"
                                >
                                  +0.78%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <a href="#">
                            <Text size="3xl" as="p" className="!text-gray-900_05">
                              $0.634810
                            </Text>
                          </a>
                        </div>
                        <Img src="images/img_202401031434_svg.svg" alt="image" className="h-[60px] mb-1" />
                      </div>
                      <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
                        <div className="flex flex-col items-start justify-start w-[52%] gap-[11px]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="flex flex-row justify-start items-center w-full">
                              <div className="flex flex-row justify-start items-center w-[59%]">
                                <Img src="images/img_img_margin.png" alt="bnb_one" className="w-[50%] object-cover" />
                                <div className="flex flex-row justify-start w-[50%]">
                                  <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                    ADA
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start w-[42%]">
                                <Text
                                  size="s"
                                  as="p"
                                  className="flex justify-center items-center w-[46px] h-[20px] p-[3px] !text-red-300 bg-red-400_19 rounded-sm"
                                >
                                  -1.57%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <a href="#">
                            <Text size="3xl" as="p" className="!text-gray-900_05">
                              $0.614869
                            </Text>
                          </a>
                        </div>
                        <Img src="images/img_202401031434_svg_black_900.svg" alt="image" className="h-[60px] mb-1" />
                      </div>
                      <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
                        <div className="flex flex-col items-start justify-start w-[56%] gap-[11px]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="flex flex-row justify-start items-center w-full">
                              <div className="flex flex-row justify-start items-center w-[61%]">
                                <Img src="images/img_img_margin.png" alt="bnb_one" className="w-[45%] object-cover" />
                                <div className="flex flex-row justify-start w-[56%]">
                                  <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                    AVAX
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start w-[40%]">
                                <Text
                                  size="s"
                                  as="p"
                                  className="flex justify-center items-center w-[48px] h-[20px] p-[3px] !text-red-300 bg-red-400_19 rounded-sm"
                                >
                                  -3.78%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <a href="#">
                            <Text size="3xl" as="p" className="!text-gray-900_05">
                              $41.05
                            </Text>
                          </a>
                        </div>
                        <Img src="images/img_202401031437_svg.svg" alt="image" className="h-[60px] mb-1" />
                      </div>
                      <Img
                        src="images/img_button_next_slide_white_a700.svg"
                        alt="bnb_one"
                        className="h-[44px] my-[58px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full mb-4 pb-[30px] gap-5 mx-auto max-w-[1330px]">
                <div className="flex flex-row justify-start w-[98%]">
                  <Heading as="h3" className="mt-1 !text-gray-900_01">
                    Trending Coins
                  </Heading>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center items-center w-full">
                    <Img src="images/img_button_next_slide.svg" alt="buttonnext_one" className="h-[44px] z-[1]" />
                    <div className="flex flex-row justify-center w-[99%] ml-[-8px]">
                      <div className="flex flex-row justify-center items-center w-full">
                        <div className="flex flex-row w-full gap-2.5">
                          <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
                            <div className="flex flex-col items-start justify-start w-full gap-px">
                              <div className="flex flex-row justify-start w-full pb-3">
                                <div className="flex flex-row justify-start items-center w-[52%]">
                                  <div className="flex flex-row justify-start items-center w-[58%]">
                                    <Img
                                      src="images/img_img_margin.png"
                                      alt="trending_coins"
                                      className="w-[51%] object-cover"
                                    />
                                    <div className="flex flex-row justify-start w-[50%]">
                                      <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                        BTC
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row justify-start w-[43%]">
                                    <Text
                                      size="s"
                                      as="p"
                                      className="flex justify-center items-center w-[48px] h-[20px] p-[3px] !text-teal-400 bg-teal-500_0f rounded-sm"
                                    >
                                      +0.10%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <a href="#">
                                <Text size="3xl" as="p" className="!text-gray-900_05">
                                  $45,332.83
                                </Text>
                              </a>
                            </div>
                            <Img
                              src="images/img_202401031434_svg.svg"
                              alt="btc_two"
                              className="h-[60px] mt-[-1px] mb-1"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
                            <div className="flex flex-col items-start justify-start w-full gap-px">
                              <div className="flex flex-row justify-start w-full pb-3">
                                <div className="flex flex-row justify-start items-center w-[52%]">
                                  <div className="flex flex-row justify-start items-center w-[59%]">
                                    <Img
                                      src="images/img_img_margin.png"
                                      alt="imgmargin_one"
                                      className="w-[51%] object-cover"
                                    />
                                    <div className="flex flex-row justify-start w-[50%]">
                                      <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                        ETH
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row justify-start w-[42%]">
                                    <Text
                                      size="s"
                                      as="p"
                                      className="flex justify-center items-center w-[47px] h-[20px] p-[3px] !text-red-300 bg-red-400_19 rounded-sm"
                                    >
                                      -0.21%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <a href="#">
                                <Text size="3xl" as="p" className="!text-gray-900_05">
                                  $2,375.15
                                </Text>
                              </a>
                            </div>
                            <Img
                              src="images/img_202401031434_svg.svg"
                              alt="image"
                              className="h-[60px] mt-[-1px] mb-1"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
                            <div className="flex flex-col items-start justify-start w-full gap-px">
                              <div className="flex flex-row justify-start w-full pb-3">
                                <div className="flex flex-row justify-start items-center w-[60%]">
                                  <div className="flex flex-row justify-start items-center w-[63%]">
                                    <Img
                                      src="images/img_img_margin.png"
                                      alt="imgmargin_one"
                                      className="w-[42%] object-cover"
                                    />
                                    <div className="flex flex-row justify-center w-[59%]">
                                      <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                        stETH
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row justify-start w-[38%]">
                                    <Text
                                      size="s"
                                      as="p"
                                      className="flex justify-center items-center w-[49px] h-[20px] p-[3px] !text-red-300 bg-red-400_19 rounded-sm"
                                    >
                                      -0.34%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <a href="#">
                                <Text size="3xl" as="p" className="!text-gray-900_05">
                                  $2,371.72
                                </Text>
                              </a>
                            </div>
                            <Img
                              src="images/img_202401031437_svg_black_900.svg"
                              alt="image"
                              className="h-[60px] mt-[-1px] mb-1"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
                            <div className="flex flex-col items-start justify-start w-[51%] gap-[11px]">
                              <div className="flex flex-row justify-start w-full">
                                <div className="flex flex-row justify-start items-center w-full">
                                  <div className="flex flex-row justify-start items-center w-[57%]">
                                    <Img
                                      src="images/img_img_margin.png"
                                      alt="imgmargin_one"
                                      className="w-[54%] object-cover"
                                    />
                                    <div className="flex flex-row justify-center w-[47%]">
                                      <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                        UNI
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row justify-start w-[44%]">
                                    <Text
                                      size="s"
                                      as="p"
                                      className="flex justify-center items-center w-[48px] h-[20px] p-[3px] !text-red-300 bg-red-400_19 rounded-sm"
                                    >
                                      -4.02%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <a href="#">
                                <Text size="3xl" as="p" className="!text-gray-900_05">
                                  $7.3192
                                </Text>
                              </a>
                            </div>
                            <Img src="images/img_202401031434_svg.svg" alt="image" className="h-[60px] mb-1" />
                          </div>
                          <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px]">
                            <div className="flex flex-col items-start justify-start w-[52%] gap-[11px]">
                              <div className="flex flex-row justify-start w-full">
                                <div className="flex flex-row justify-start items-center w-full">
                                  <div className="flex flex-row justify-start items-center w-[59%]">
                                    <Img
                                      src="images/img_img_margin.png"
                                      alt="imgmargin_one"
                                      className="w-[50%] object-cover"
                                    />
                                    <div className="flex flex-row justify-start w-[50%]">
                                      <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                        CFG
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row justify-start w-[42%]">
                                    <Text
                                      size="s"
                                      as="p"
                                      className="flex justify-center items-center w-[46px] h-[20px] p-[3px] !text-red-300 bg-red-400_19 rounded-sm"
                                    >
                                      -1.76%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <a href="#">
                                <Text size="3xl" as="p" className="!text-gray-900_05">
                                  $0.773600
                                </Text>
                              </a>
                            </div>
                            <Img
                              src="images/img_202401031437_svg_black_900_60x200.svg"
                              alt="image"
                              className="h-[60px] mb-1"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_button_next_slide_white_a700.svg"
                          alt="buttonnext"
                          className="h-[44px] ml-[-15px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
