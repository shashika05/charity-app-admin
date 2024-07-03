import React from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from "semantic-ui-react";

export default function CardExample() {
  return (
    <Card>
      <Image src="./logo512.png" wrapped ui={false} />
      <CardContent>
        <CardHeader>Matthew</CardHeader>
        <CardMeta>
          <span className="date">Joined in 2015</span>
        </CardMeta>
        <CardDescription>
          Matthew is a musician living in Nashville.
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </CardContent>
    </Card>
  );
}
