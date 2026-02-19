export default function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 font-poppins font-size: 20px
    line-height: 25px" >
      <div className="text-3xl max-w-[30px]
">{icon}</div>

      <div>
        <p className="text-[20px]">{label}</p>
        <p className="font-bold text-[20px]">{value}</p>
      </div>
    </div>
  );
}
