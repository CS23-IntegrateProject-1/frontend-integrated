import { Flex, VStack } from "@chakra-ui/react";
import { VoucherCard } from "../component/VoucherCard";
import { FullPageLoader } from "../../../components/Loader/FullPageLoader";
import { Axios } from "../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";



export const VoucherPage = () => {
  const { data: vouchers, isLoading, isError, error } = useQuery(["vouchers"], async () => {
    const response = await Axios.get("/feature7/getAllUserVouchers");
    // console.log("Voucher data:", response.data);
    return response.data;
  });
  if (isLoading) {
    return <FullPageLoader />;
  }
  if (isError) {
    return <div>An error occurred: {(error as Error).message}</div>;
  }

  return (
    <Flex direction="column" align="center" justify="center">
      <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
        {vouchers.map((voucher: any) => (
          <VoucherCard
            key={voucher.voucherId}
            id={voucher.voucherId}
            voucherName={voucher.voucher_name}
            description={voucher.description}
            // onClick={() => console.log("Voucher clicked")}
          />
        ))}
      </VStack>
    </Flex>
  );
};
