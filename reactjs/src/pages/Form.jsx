import React from 'react';
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

function Form() {
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
                <Input id="email" placeholder="Email" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Add</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Form;