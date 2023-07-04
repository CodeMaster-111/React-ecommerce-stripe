import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <div>
            Discover endless possibilities with our premium selection of
            products. Shop now and experience unparalleled quality, style, and
            convenience. From fashion and beauty essentials to home decor and
            gadgets, we have everything you need to elevate your lifestyle.
            Enjoy seamless browsing, secure transactions, and swift delivery.
            Your satisfaction is our top priority, so indulge in a seamless
            shopping experience with our reliable customer support. Join our
            community of satisfied customers and embrace a world of online
            shopping at its finest. Start exploring today and unlock a world of
            limitless shopping possibilities.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            123 Maple Street, Toronto, Ontario, M1A 1A1
          </Typography>
          <Typography mb="30px">Email: jane.doe1234@example.com</Typography>
          <Typography mb="30px">+1 555-123-4567</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
