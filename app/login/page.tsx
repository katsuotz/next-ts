"use client"

import Image from 'next/image'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import * as z from "zod"
import {Button} from "@/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import api from "@/lib/api";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export default function Home() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = ({username, password}: any) => {
    api.post('/login', {
      username,
      password,
    }).then((res: any) => {
      if (res?.data?.token) {
        localStorage.setItem('poin-user', JSON.stringify(res.data))
        location.href = '/'
      }
    }).catch((err: any) => {
      console.log(err)
    })
  }

  return (
    <main className="flex flex-col items-center p-24">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className=""
        width={100}
        height={24}
        priority
      />

      <Card className="min-w-[450px] max-w-full mt-5">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="username"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

    </main>
  )
}
