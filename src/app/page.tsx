import { Search, ChevronDown, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NextLink from "next/link"

export default function CryptoDashboard() {
  const cryptoAssets = [
    {
      name: "4-Way Mirror Money",
      symbol: "4WMM",
      balance: "834.394 4WMM",
      balanceUSD: "$64,478.99",
      price: "$77.28",
      change: "0.00%",
      logo: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=40&h=40&fit=crop&crop=center"
    },
    {
      name: "Coinbase Wrapped BTC",
      symbol: "CBBTC",
      balance: "0.00307 CBBTC",
      balanceUSD: "$320.52",
      price: "$107,751.94",
      change: "+0.87%",
      logo: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=40&h=40&fit=crop&crop=center"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800/50 px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-semibold text-white">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coinbase Wallet Logo" viewBox="0 0 32 32" width="32" height="32" className="isxjajm" data-testid="wallet-logo" fill="none"><title>Coinbase Wallet Logo</title><path data-testid="wallet-logo-path" d="M0 16C0 24.8356 7.16444 32 16 32C24.8356 32 32 24.8356 32 16C32 7.16444 24.8356 0 16 0C7.16444 0 0 7.16444 0 16ZM11.9111 10.8444C11.32 10.8444 10.8444 11.32 10.8444 11.9111V20.0889C10.8444 20.68 11.32 21.1556 11.9111 21.1556H20.0889C20.68 21.1556 21.1556 20.68 21.1556 20.0889V11.9111C21.1556 11.32 20.68 10.8444 20.0889 10.8444H11.9111Z" fill="rgb(55,115,245)" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-8 h-4" />
              <Input
                placeholder="Search Coins, app..."
                className="bg-[#343F43] rounded-full border-gray-700/50 pl-10 w-[40vw] text-white placeholder:text-gray-500 focus:border-[#7100CF] focus:ring-1 focus:ring-gray-[#7100CF]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-10">
        {/* Balance Section */}
        <div className="mb-12 flex flex-row justify-between items-center">
          <div>
            <div className="text-gray-400 text-sm mb-3 font-medium">Balance</div>
            <div className="text-7xl font-light mb-8 text-white tracking-tight">$64,799.51</div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8 cursor-pointer hover:scale-105 transition-transform">
              <AvatarFallback className="bg-blue-600 text-white text-xs font-medium">D</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 cursor-pointer hover:scale-105 transition-transform">
              <AvatarFallback className="bg-gray-600 text-white text-xs font-medium">G</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 cursor-pointer hover:scale-105 transition-transform">
              <AvatarFallback className="bg-yellow-500 text-white text-xs font-medium">S</AvatarFallback>
            </Avatar>
            <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer transition-colors">+4</Badge>
          </div>

        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="crypto" className="w-full relative">
          <TabsList className="bg-transparent border-none p-0 mb-10 h-auto">
            <TabsTrigger
              value="crypto"
              className="bg-transparent text-[#7100CF] border-b-2 border-[#7100CF] rounded-none px-0 mr-10 pb-3 data-[state=active]:bg-transparent data-[state=active]:text-[#7100CF] data-[state=active]:shadow-none font-medium"
            >
              Crypto
            </TabsTrigger>
            <TabsTrigger
              value="defi"
              className="bg-transparent text-gray-400 border-b-2 border-transparent rounded-none px-0 mr-10 pb-3 data-[state=active]:bg-transparent data-[state=active]:text-[#7100CF] data-[state=active]:border-[#7100CF] data-[state=active]:shadow-none hover:text-gray-300 transition-colors font-medium"
            >
              DeFi
            </TabsTrigger>
            <TabsTrigger
              value="transactions"
              className="bg-transparent text-gray-400 border-b-2 border-transparent rounded-none px-0 mr-10 pb-3 data-[state=active]:bg-transparent data-[state=active]:text-[#7100CF] data-[state=active]:border-[#7100CF] data-[state=active]:shadow-none hover:text-gray-300 transition-colors font-medium"
            >
              Transactions
            </TabsTrigger>
            <TabsTrigger
              value="testnets"
              className="bg-transparent text-gray-400 border-b-2 border-transparent rounded-none px-0 mr-10 pb-3 data-[state=active]:bg-transparent data-[state=active]:text-[#7100CF] data-[state=active]:border-[#7100CF] data-[state=active]:shadow-none hover:text-gray-300 transition-colors font-medium"
            >
              Testnets
            </TabsTrigger>
            <TabsTrigger
              value="link"
              className="bg-transparent text-gray-400 border-b-2 border-transparent rounded-none px-0 mr-10 pb-3 data-[state=active]:bg-transparent data-[state=active]:text-[#7100CF] data-[state=active]:border-[#7100CF] data-[state=active]:shadow-none hover:text-gray-300 transition-colors font-medium"
            >
              Link Account
            </TabsTrigger>

            {/* Network Dropdown */}
            <div className="absolute right-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-[#00000CC] border-gray-700/50 text-white hover:text-white rounded-full hover:bg-[#7100CF] transition-colors">
                    All networks
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-gray-700 text-white">
                  <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">All networks</DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">Ethereum</DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">Solana</DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">Bitcoin</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>


          </TabsList>

          <TabsContent value="crypto" className="mt-0">
            {/* Crypto Balance */}
            <div className="mb-8">
              <div className="text-xl text-white mb-6 font-medium">
                Crypto Balance <span className="text-gray-400 font-normal">$64,799.51</span>
              </div>
            </div>

            {/* Assets Table */}
            <div className="bg-gray-950/50 rounded-xl border border-gray-800/50 overflow-hidden">

              <Table>
                <TableHeader>
                  <TableRow className="border-gray-800/50 hover:bg-transparent">
                    <TableHead className="text-gray-400 font-medium py-4 px-6">Asset</TableHead>
                    <TableHead className="text-gray-400 font-medium text-right py-4 px-6">Balance</TableHead>
                    <TableHead className="text-gray-400 font-medium text-right py-4 px-6">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cryptoAssets.map((asset) => (
                    <TableRow key={asset.symbol} className="border-gray-800/50 hover:bg-gray-900/30 transition-colors cursor-pointer">
                      <TableCell className="py-5 px-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-11 h-11">
                            <AvatarImage src={asset.logo} alt={asset.name} className="object-cover" />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-medium">
                              {asset.symbol.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-white font-medium text-base mb-1">{asset.name}</div>
                            <div className="text-gray-400 text-sm">{asset.balance}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right py-5 px-6">
                        <div className="text-white font-medium text-base">{asset.balanceUSD}</div>
                      </TableCell>
                      <TableCell className="text-right py-5 px-6">
                        <div className="text-white font-medium text-base mb-1">{asset.price}</div>
                        <div className={`text-sm font-medium ${asset.change.startsWith('+') ? 'text-green-400' : 'text-gray-400'}`}>
                          {asset.change}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="defi">
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg">DeFi content coming soon...</div>
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg">Transactions content coming soon...</div>
            </div>
          </TabsContent>

          <TabsContent value="testnets">
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg">Testnets content coming soon...</div>
            </div>
          </TabsContent>
          <TabsContent value="link">
            <NextLink href="/accounts">
              <div className="flex items-center justify-center py-16">
                <div className=" rounded-full border-white border-1 bg-[#343F43] flex flex-row items-center justify-center gap-2 text-white hover:bg-[#7100CF] px-6 py-2 cursor-pointer">
                  <span>Link Account</span> <ArrowRight />
                </div>
              </div>
            </NextLink>
          </TabsContent>
        </Tabs>



      </div>
    </div>
  )
}
