export function InputBox({label, placeholder,reference}) {
    return <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input ref={reference} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
}