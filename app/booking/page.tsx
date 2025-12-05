import Link from "next/link";
import { Button } from "@mantine/core";
import Image from "next/image";
import { Input, TextInput } from "@mantine/core";
import { Radio, Group, RadioGroup } from "@mantine/core";
import { Select } from "@mantine/core";

export default function Page() {
  const locationsFrom = ["Lahore", "Rawalpindi", "Islamabad", "Karachi"];
  const locationsTo = ["Skardu", "Chitral", "Gilgit", "Ghizer", "Khaplu"];
  return (
    <div className="bg-[url(/bookingBG.jpg)] bg-cover bg-center w-vw h-dvh flex items-center justify-center px-3 ">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex bg-white rounded-4xl flex-col overflow-hidden items-center py-6 shadow-xl shadow-stone-700 ">
        <div className="py-10 ">
          <Image
            width={0}
            height={0}
            sizes="full"
            src="/rapidLogo.png"
            alt="logo"
            className="h-40 w-45"
          ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 pb-10 gap-6 md:w-[40vw]">
          <TextInput label="Full Name" />
          <TextInput label="Cnic #" />
          <RadioGroup
            name="favoriteFramework"
            label="Select Gender"
            withAsterisk
          >
            <Group mt="xs">
              <Radio value="react" label="Male" />
              <Radio value="svelte" label="Female" />
              <Radio value="Other" label="Hamza" />
            </Group>
          </RadioGroup>
          <Select
            label="Select Seat #"
            data={["1", "2", "3", "4", "5", "6"]}
            placeholder="Select Seat #"
          />
          <Select label="From" data={locationsFrom} placeholder="Where" />
          <Select label="To" data={locationsTo} placeholder="To" />
        </div>
        <div className="flex gap-6 md:flex-row flex-col">
          <Button variant="filled" color="green">
            Submit
          </Button>
          <Button variant="filled" color="red">
            <Link href={"/"}>
              <span className="mr-2">&larr;</span>Cancel
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
