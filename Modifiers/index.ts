type Status = "success" | "error";
type GroupedByStatus = {
  [index in Status]: Response[];
};
