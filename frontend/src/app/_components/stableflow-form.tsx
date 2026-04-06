"use client";

import { z } from 'zod'
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';


const stableFlowSchema = z.object({
  produto: z.string().min(2, "O produto é obrigatório"),
  lote: z.string().min(2, "O lote é obrigatório"),
  periodo_tipo: z.enum(["curto", "médio", "longo"], { error: "Selecione o período" }),
  data_inicial: z.string().min(1, "A data inicial é obrigatória"),
})

type StableFlowSchemaFormData = z.infer<typeof stableFlowSchema>;

interface StableFlowFormProps {
  onSubmit: (data: StableFlowSchemaFormData) => void
}

export function StableFlowForm({ onSubmit }: StableFlowFormProps) {

  const form = useForm<StableFlowSchemaFormData>({
    resolver: zodResolver(stableFlowSchema),
    defaultValues: {
      produto: "",
      lote: "",
      periodo_tipo: "" as any,
      data_inicial: "",
    },
  })


  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <Card className='w-full max-w-2xl border-0'>
        <div className='p-8'>

          <div className='text-center mb-8'>
            <div className='flex items-center justify-center mb-4 mx-auto'>
              <Image src="/sf.png" alt="StableFlow Logo" width={56} height={56} priority />
            </div>
            <h1 className='text-3xl font-bold text-green-700 dark:text-green-500 mb-2'>StableFlow</h1>
            <p className='font-medium text-green-600 dark:text-green-400'> Seu Agente IA para Estudos de Estabilidade</p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-6'
            >

              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-green-700 dark:text-green-300 flex items-center'>
                  Dados do produto
                </h3>
              </div>

              {/* CAMPOS PRODUTO*/}
              <div className='w-full'>
                <FormField
                  control={form.control}
                  name="produto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-900 dark:text-zinc-100">Produto</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder='Digite o nome do produto...'
                          className='w-full'
                        />
                      </FormControl>
                    </FormItem>
                  )}

                />

              </div>


              {/* CAMPOS REFERENTE A PERÍODO, LOTE E DATA INICIAL*/}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <FormField
                  control={form.control}
                  name="periodo_tipo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-900 dark:text-zinc-100">Período de Estudo</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='w-full'>
                            <SelectValue placeholder="Selecione o período" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="curto">Curto</SelectItem>
                          <SelectItem value="médio">Médio</SelectItem>
                          <SelectItem value="longo">Longo</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lote"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-900 dark:text-zinc-100">Lote</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder='Ex: 19800210'
                        />
                      </FormControl>
                    </FormItem>
                  )}

                />

                <FormField
                  control={form.control}
                  name="data_inicial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-900 dark:text-zinc-100">Data Inicial</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <Button className='w-full mt-4 hover:opacity-90 cursor-pointer'>
                Registrar Dados do Produto
              </Button>

            </form>

          </Form>

        </div>
      </Card>
    </div>
  )
}