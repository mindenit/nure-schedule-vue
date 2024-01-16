<script setup lang="ts">
import { DialogContent, DialogRoot, DialogTrigger } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { MainLayout } from '@/layouts/MainLayout'
import { ListItem, ListRoot } from '@/components/ui/List'
</script>

<template>
  <MainLayout>
    <main>
      <DialogRoot>
        <DialogTrigger>
          <Button>Click me</Button>
        </DialogTrigger>
        <DialogContent>
          <ListRoot>
            <ListItem value="1">Adam Smith</ListItem>
            <ListItem value="2">John Doe</ListItem>
            <ListItem value="3">Tom Backer</ListItem>
          </ListRoot>
        </DialogContent>
      </DialogRoot>
    </main>
  </MainLayout>
</template>
