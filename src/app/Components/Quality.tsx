const Quality = () => {
  return (
    <div className="xl:px-32 px-4">
      <div className=" bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-blue-900">
            Quality Assurance Process
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every product goes through our rigorous 5-step quality verification
            process before reaching African markets.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-5 mt-8">
          {[
            "Supplier Verification",
            "Product Authentication",
            "Quality Testing",
            "Regulatory Approval",
            "Final Inspection",
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                {index + 1}
              </div>
              <p className="text-sm font-semibold text-blue-900">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quality;
