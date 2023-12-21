import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import QRCode from "react-qr-code";
import { QrScanner } from "@yudiel/react-qr-scanner";
import {
  AttachmentIcon,
  CheckIcon,
  DownloadIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {  useEffect, useRef, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
export const QRScanner = () => {
  //drawer for qr code
  const { isOpen, onOpen, onClose } = useDisclosure();
  //alert for copy link
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  //alertfor downlaod qr code
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();
  
  const cancelRef = useRef();
  const [qrCodeData, setQrCodeData] = useState("");
  const [newData, setNewData] = useState("");
  const [openCam, setOpenCam] = useState(false);
  const [scannedData, setScannedData] = useState("")
  const [friList, setFriList] = useState<any[]>([]);
  const [userName, setUserName] = useState("");
  //const [checkFri, setCheckFri] = useState(false);
  const [funstart, setFunstart] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [sName, setSName] = useState("");
  const handleCopyLink = async() => {
    setLinkCopied(true);
    console.log(userName);
    const copyLink = `${
      import.meta.env.VITE_BACKEND_URL
    }/feature1/qr/${userName}`;
    console.log(copyLink);
   // console.log(checkFri);

    // if (linkCopied) {
      onOpen2();
      await navigator.clipboard.writeText(copyLink);
      console.log("URL copied to clipboard!");
      console.log(linkCopied);
    // }
  };
  const openCamera = () => {
    setOpenCam(true);
  };
  const handleOpen = () => {
    onOpen();
    console.log("hello");
  };
  const downloadQR = () => {
    onOpen3();
    window.open(`${
      import.meta.env.VITE_BACKEND_URL
    }/feature1/qr/${userName}`);
  };
  const stop = () => {
    setOpenCam(false);
  };

  useEffect(() => {
    const url = `/feature1/profile`;
    Axios.get(url, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          const data = response.data;
          const userId = data.userId;
          const username = data.username;
          setUserName(username);
          const gender = data.gender;
          const birthday = data.birthday;
          const phone = data.phone;
          const qrCodeData = JSON.stringify({
            userId,
            username,
            gender,
            birthday,
            phone,
          });
          //const qrCodeData = `${userId},${username}, ${data.gender}, ${data.birthday}, ${data.phone}, ${data.email}`;
          setQrCodeData(qrCodeData);
          console.log(qrCodeData);
        }
      })
      .catch((error) => {
        console.error("Error fetching profile  data:", error);
      });
  }, [qrCodeData]);
  //handle if there is user data update to generate new qr code
  useEffect(() => {
    const url = `/feature1/profile`;
    Axios.get(url, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          const data = response.data;
          const userId = data.userId;
          const username = data.username;
          const gender = data.gender;
          const birthday = data.birthday;
          const phone = data.phone;
          const qrCodeData = JSON.stringify({
            userId,
            username,
            gender,
            birthday,
            phone,
          });
          //const qrCodeData = `${userId},${username}, ${data.gender}, ${data.birthday}, ${data.phone}, ${data.email}`;
          setQrCodeData(qrCodeData);
          console.log(qrCodeData, "JSON Data from me");
        }
      })
      .catch((error) => {
        console.error("Error fetching profile  data:", error);
      });
  }, [newData]);

  const generateQR = () => {
    setNewData("1");
  };
  // useEffect(() => {
  //if user found from scanning qr code}
  // if(funstart){
  //   console.log('fund');
  //   console.log(scannedData, "  scann data");
  //   const url = `/feature1/friend`;
  //   Axios.get(url, { withCredentials: true })
  //     .then((response) => {
  //       if (response.status == 200) {
  //           const data = response.data;
  //           setFriList(data);
  //           friList.map((item) => {
  //               if (item.name.includes(scannedData)) {
  //                   console.log("found");
  //               }
  //           });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching profile  data:", error);
  //     });
  //     setFunstart(false);
  // }
  const alredayFri = () => {
    console.log("already fri");
     const url = `/feature1/friend`;
    Axios.get(url, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          const data = response.data;
          setFriList(data);
          //already in the fir list situation
          const usernameRegex = /"username":"(.*?)"/;
const match = usernameRegex.exec(sName);
const scanName = match?.[1]
          friList.map((item) => {
            console.log(item.username);
            console.log(scanName);
            if(item.username == scanName ){
              console.log("found");//done here show toast laready fir
            }
            //console.log(item.username, scanName, "from smae map");
          });
          console.log(data, "from already fri");
        }
      })
      .catch((error) => {
        console.error("Error fetching profile  data:", error);
      });
    }

  if (funstart) {
    console.log("fund starat");
    const scanDataArray = scannedData.split(",");
    const [scanId, scanName, scanG, scanBirthday, scanPhone] = scanDataArray;
    console.log(
      scanId,
      scanName,
      scanG,
      scanBirthday,
      scanPhone,
      "from destructure"
    );
    setSName(scanName);
    const v = alredayFri();
    setFunstart(false);
      console.log("stop");
      console.log(v);
    //const url = `/feature1/friend`;
    // Axios.get(url, { withCredentials: true })
    //   .then((response) => {
    //     if (response.status == 200) {
    //       const data = response.data;
    //       setFriList(data);
    //       //already in the fir list situation
    //       friList.map((item) => {
    //         if(item.name == scanName )
    //         console.log(item.name, scanName, "from map");
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching profile  data:", error);
    //   });
    // //if they are not fri to each other
    // //add to fri list
    // if(checkFri){
    //   const urlfri = `/feature1/search/friends?username=${scanName}`;
    //   Axios.get(urlfri, { withCredentials: true })
    //     .then((response) => {
    //       if (response.status == 200) {
    //         console.log(response.data, "fund from username fri add");
    //         setCheckFri(false);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching username fri data:", error);
    //     });
      
    // }
    }
    

  // }, [scannedData, friList]);
  
  return (
    <Box height={"100%"}>
      {/* upper part */}
      <Box
        width={{ lg: 80, base: 60 }}
        height={"60%"}
        ml={{ lg: "39%", base: "50" }}
        mt={{ lg: "", base: "10" }}
      >
        {openCam && (
          <QrScanner
            onDecode={(result: string) => {
              console.log(result, "result");
              setScannedData(result);
              setFunstart(true);
            }}
            onError={(error: { message: any }) => console.log(error?.message)}
          />
        )}
        {funstart}
        {scannedData}
        {/* {JSON.parse(scannedData)} */}
      </Box>
      {/* lower part */}
      <Box
        height={"30%"}
        mx={{ base: -4, lg: -8 }}
        mt={{ base: 55, lg: 90 }}
        p={20}
        bg={"brand.300"}
      >
        <Button
          onClick={handleOpen}
          mt={-20}
          ml={{ lg: "45%", base: "5" }}
          px={5}
          borderRadius={15}
        >
          <Box>
            <svg
              width="31"
              height="31"
              color="black"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="31" height="31" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_6098_13821"
                    transform="scale(0.00195312)"
                  />
                </pattern>
                <image
                  id="image0_6098_13821"
                  width="512"
                  height="512"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMS0yMVQxODozMDowOCswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTEtMjFUMTg6NTA6NTcrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTEtMjFUMTg6NTA6NTcrMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwZWM1MjY0LTcyZGMtNWQ0Yi1hNWFmLThjMjc3ZTE3NjNlNiIgeG1wTU06RG9jdW1lbnRJRD0i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"
                />
              </defs>
            </svg>
          </Box>
          <Box ml={3}>My QR Code</Box>
        </Button>
        <Box mt={-2} ml={{ lg: "46%", base: "7" }}>
          <Text
            cursor={"pointer"}
            onClick={openCamera}
            fontSize={TextStyle.body2.fontSize}
          >
            Scan QR code to add friends
          </Text>
        </Box>
      </Box>
      <button onClick={stop}>stop</button>
      {/* Drawer for QR code*/}
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={"grey.200"} borderRadius={20}>
          <DrawerCloseButton color={"brand.200"} />
          <DrawerBody>
            <Box ml={{ lg: "45%", base: "25%" }} my={2} mt={{ base: "4" }}>
              <QRCode id="qr" value={qrCodeData} size={180} level="H" />;
            </Box>
            <Box ml={{ lg: "35%" }} my={2}>
              <Text
                cursor={"pointer"}
                color={"black"}
                textAlign={{ base: "center", lg: "left" }}
              >
                Show or send this QR code to your friends to let them add you
              </Text>
            </Box>
            <Box my={3} display={"flex"} justifyContent={"space-evenly"}>
              <Box cursor={"pointer"} onClick={handleCopyLink}>
                <Box ml={5}>
                  <AttachmentIcon color={"black"} />
                </Box>
                <Box color={"black"}>Copy link</Box>
              </Box>

              <Box color={"black"}>
                <Box ml={10}>
                  <ExternalLinkIcon />
                </Box>
                <Box ml={8}> Share</Box>
              </Box>
              <Box color={"black"} cursor={"pointer"} onClick={downloadQR}>
                <Box ml={5}>
                  <DownloadIcon />
                </Box>
                <Box>Download</Box>
              </Box>
            </Box>
            <Box my={4} ml={{ lg: "45%", base: "20%" }}>
              <Button
                onClick={generateQR}
                _hover={{ bg: "brand.200" }}
                px={5}
                borderRadius={20}
                bg={"brand.300"}
                color="white"
              >
                Generate QR code
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Drawe for QR Link Copy */}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef as any}
        onClose={onClose2}
        isOpen={isOpen2}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogBody color={"black"} fontSize={TextStyle.h1.fontSize}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                position={"relative"}
                width={"20"}
                height={"20"}
                borderRadius={"50%"}
                bg="brand.200"
              ></Box>
              <Box position={"absolute"} ml={7}>
                {" "}
                <CheckIcon
                  fontSize={TextStyle.h1.fontSize}
                  fontWeight={TextStyle.h1.fontWeight}
                  color={"white"}
                />
              </Box>
              <Box> Link Copied Successfully</Box>
            </Box>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>


      {/* Drawe for QR Link Copy */}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef as any}
        onClose={onClose3}
        isOpen={isOpen3}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogBody color={"black"} fontSize={TextStyle.h1.fontSize}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                position={"relative"}
                width={"20"}
                height={"20"}
                borderRadius={"50%"}
                bg="brand.200"
              ></Box>
              <Box position={"absolute"} ml={7}>
                {" "}
                <CheckIcon
                  fontSize={TextStyle.h1.fontSize}
                  fontWeight={TextStyle.h1.fontWeight}
                  color={"white"}
                />
              </Box>
              <Box>Downloaded QR code Successfully</Box>
            </Box>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};
