import fs from "fs";
import path from "path";
import Image from "next/image";

export default function GalleryPage() {
  const directoryPath = path.join(process.cwd(), "public", "images", "projects");
  const filenames = fs.readdirSync(directoryPath);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
      {filenames.map((name) => (
        <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span>{name}</span>
          <Image src={`/images/projects/${name}`} alt={name} width={300} height={300} style={{ objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
}
