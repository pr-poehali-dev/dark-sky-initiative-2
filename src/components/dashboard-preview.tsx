export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <img
          src="https://cdn.poehali.dev/projects/96612069-3ead-46fd-bbc9-37398dcd3726/files/8857c5b1-d7c3-4c64-8522-ff322848fa05.jpg"
          alt="Дашборд реактивации лидов"
          width={1160}
          height={700}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}