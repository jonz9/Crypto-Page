import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";

const FAQ = () => {
  return (
    <div className="py-10 px-10 w-full h-full text-primary-text bg-primary-color">
      <div className="my-20 flex flex-col justify-items items-center">
        <h1 className="font-main text-5xl font-bold">
          Frequently Asked Questions
        </h1>
        <div className="w-full px-60 py-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                1. What is a cryptocurrency exchange?
              </AccordionTrigger>
              <AccordionContent>
                Cryptocurrency exchanges are digital marketplaces that enable
                users to buy and sell cryptocurrencies like Bitcoin, Ethereum,
                and Tether. The CryptoKet exchange is the largest crypto
                exchange by trade volume.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                2. What products does CryptoKet provide?
              </AccordionTrigger>
              <AccordionContent>
                CryptoKet is the world's leading cryptocurrency exchange,
                catering to 169 million registered users in over 180 countries.
                With low fees and over 350 cryptocurrencies to trade, CryptoKet
                is the preferred exchange to trade Bitcoin, Altcoins, and other
                virtual assets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                3. How to buy Bitcoin and other cryptocurrencies on CryptoKet?
              </AccordionTrigger>
              <AccordionContent>
                There are several ways to buy cryptocurrencies on Binance. You
                can use a credit/debit card, cash balance, or Apple Pay/Google
                Pay to purchase crypto on CryptoKet. Before getting started,
                please make sure you’ve completed Identity Verification for your
                CryptoKet account.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                4. How to track cryptocurrency prices?
              </AccordionTrigger>
              <AccordionContent>
                The easiest way to track the latest cryptocurrency prices,
                trading volumes, trending altcoins, and market cap is the
                CryptoKet Cryptocurrency Directory. Click on the coins to know
                historical coin prices, 24-hour trading volume, and the price of
                cryptocurrencies like Bitcoin, Ethereum, BNB and others in
                real-time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                5. How to trade cryptocurrencies on CryptoKet?
              </AccordionTrigger>
              <AccordionContent>
                You can trade hundreds of cryptocurrencies on CryptoKet via the
                Spot, Margin, Futures, and Options markets. To begin trading,
                users need to register an account, complete identity
                verification, buy/deposit crypto, and start trading.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                6. How to earn from crypto on CryptoKet?
              </AccordionTrigger>
              <AccordionContent>
                Users can earn rewards on more than 180+ cryptocurrencies by
                using one of the products offered on CryptoKet Earn. Our
                platform offers dozens of digital assets like Bitcoin, Ethereum,
                and stablecoins.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
