import { useState } from 'react';
import { useWriteContract } from 'wagmi';
import { Input } from '../components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import MailList from "../artifacts/contracts/MailList.sol/MailList.json";

function Form() {
  const { data: hash, writeContract: subscribe } = useWriteContract() 

  const [email, setEmail] = useState("");

  const subscribeTo = async () => {
    subscribe({ 
      address: '0x3060F1B52BE664756757ea787c08b252Ca85F303', 
      abi: MailList.abi, 
      functionName: 'subscribe', 
      args: [email],
    });
  }
  
  return (
    <div className="flex justify-center mt-10">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Subscribe</CardTitle>
          <CardDescription>Enter your email</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={() => subscribeTo()}>Add</Button>
        </CardFooter>
        {hash && <div>Transaction Hash: {hash}</div>} 
      </Card>
    </div>
  )
}

export default Form;