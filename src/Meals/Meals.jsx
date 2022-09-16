import { lazy, Suspense } from "react";
import { MealsSummary } from ".";
import { Loader } from "../UI";

const AvailableMeals = lazy(() => import("./AvailableMeals"));

export const Meals = () => {
  return (
    <>
      <MealsSummary />
      <Suspense fallback={<Loader />}>
        <AvailableMeals />
      </Suspense>
    </>
  );
};
