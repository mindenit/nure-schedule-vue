<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { Accordion } from '../ui/Accordion/'
import { Button } from '../ui/Button'
import { DialogContent, DialogHeader, DialogRoot, DialogTrigger } from '../ui/Dialog'

const { isGreater } = useBreakpoints(breakpointsTailwind)

defineEmits<{
  export: []
}>()
</script>
<template>
  <DialogRoot>
    <DialogTrigger>
      <Button v-if="isGreater('sm')" variant="outlined">
        Експортувати
        <Icon icon="ic:round-save" />
      </Button>
      <Button v-else variant="outlined" appearance="icon">
        <Icon icon="ic:round-save" />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>Експортувати розклад</DialogHeader>
      <Accordion title="Інструкція для Google Календар (ПК)" id="google-calenda">
        <ol>
          <li>
            <strong>Увійдіть до свого облікового запису Google:</strong>
            <ul>
              <li>
                Відкрийте браузер і перейдіть на
                <a href="https://calendar.google.com" target="_blank">Google Календар</a>.
              </li>
              <li>
                Введіть свої дані для входу (електронну пошту та пароль) і натисніть "Увійти".
              </li>
            </ul>
          </li>
          <li>
            <strong>Перейдіть до налаштувань:</strong>
            <ul>
              <li>У верхньому правому куті сторінки натисніть на значок "Шестерня" (⚙️).</li>
              <li>У випадаючому меню виберіть "Налаштування".</li>
            </ul>
          </li>
          <li>
            <strong>Виберіть розділ "Імпорт та експорт":</strong>
            <ul>
              <li>У меню зліва знайдіть та натисніть на розділ "Імпорт та експорт".</li>
            </ul>
          </li>
          <li>
            <strong>Імпорт ICS файлу:</strong>
            <ul>
              <li>У розділі "Імпорт" натисніть кнопку "Вибрати файл з комп'ютера".</li>
              <li>Виберіть ICS файл, який ви завантажили, з вашого комп'ютера.</li>
              <li>
                В полі "Імпорт до календаря" оберіть календар, до якого ви хочете імпортувати події
                (за замовчуванням це ваш основний календар).
              </li>
              <li>Натисніть кнопку "Імпортувати".</li>
              <li>
                Після завершення імпорту ви побачите повідомлення про кількість імпортованих подій.
              </li>
              <li>Поверніться до головної сторінки Google Календар.</li>
              <li>Перевірте, чи всі події з ICS файлу успішно додані до обраного календаря.</li>
            </ul>
          </li>
        </ol>
      </Accordion>
      <Accordion title="Інструкція для Apple Календар" id="google-calenda">
        <ol>
          <li>
            <strong>Завантажте ICS файл на свій пристрій:</strong>
            <ul>
              <li>Завантажте файл на свій пристрій за допомгою кнопки під інструкцією.</li>
            </ul>
          </li>
          <li>
            <strong>Відкрийте додаток "Файли":</strong>
            <ul>
              <li>На вашому iPhone або iPad відкрийте додаток "Файли".</li>
              <li>
                Знайдіть завантажений ICS файл у папці "Завантаження" або іншій відповідній папці.
              </li>
            </ul>
          </li>
          <li>
            <strong>Імпортуйте ICS файл в Apple Календар:</strong>
            <ul>
              <li>Натисніть на ICS файл, щоб відкрити його.</li>
              <li>Відкриється меню з варіантами додатків, виберіть "Календар".</li>
              <li>
                Виберіть календар, до якого ви хочете імпортувати події, та натисніть "Додати всі".
              </li>
            </ul>
          </li>
          <li>
            <strong>Перевірка імпортованих подій:</strong>
            <ul>
              <li>Відкрийте додаток "Календар" на своєму iPhone або iPad.</li>
              <li>Перевірте, чи всі події з ICS файлу успішно додані до обраного календаря.</li>
            </ul>
          </li>
        </ol>
      </Accordion>
      <Accordion title="Інструкція для Android" id="google-calenda">
        <ol>
          <li>
            <strong>Завантажте ICS файл на свій пристрій:</strong>
            <ul>
              <li>Завантажте файл на свій пристрій за допомгою кнопки під інструкцією.</li>
            </ul>
          </li>
          <li>
            <strong>Відкрийте завантажений файл</strong>
            <ul>
              <li>На вашому пристрої відкрийте додаток "Файли".</li>
              <li>
                Знайдіть завантажений ICS файл у папці "Завантаження" або іншій відповідній папці.
              </li>
            </ul>
          </li>
          <li>
            <strong>Відкрийте ICS файл:</strong>
            <ul>
              <li>Натисніть на ICS файл, щоб відкрити його.</li>
              <li>Відкриється меню з варіантами додатків, виберіть "Календар".</li>
              <li>
                Виберіть календар, до якого ви хочете імпортувати події, та натисніть "Додати всі".
              </li>
            </ul>
          </li>
          <li>
            <strong>Перевірка імпортованих подій:</strong>
            <ul>
              <li>Відкрийте додаток "Календар" на своєму пристрої.</li>
              <li>Перевірте, чи всі події з ICS файлу успішно додані до обраного календаря.</li>
            </ul>
          </li>
        </ol>
      </Accordion>
      <Button class="mt-auto w-full" variant="filled" @click="$emit('export')">
        Експорт до ICS
      </Button>
    </DialogContent>
  </DialogRoot>
</template>
<style lang="scss" scoped>
ul {
  margin-left: 20px;
  list-style-type: decimal;
}
a:hover {
  text-decoration: underline;
}
</style>
